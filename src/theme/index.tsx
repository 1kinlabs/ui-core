import { useTheme, ThemeProvider as StyledThemeProvider, styled } from 'styled-components'
import { useEffect, useState, useMemo } from 'react'
import { ValueOf } from 'types/ValueOf'
import { useStorage } from 'hooks/useStorage'
import { usePromise } from 'hooks/usePromise'
import {
  supportedThemes, SupportedTheme, themeEvents, ColorMap,
} from './types'

const parseTheme = ({
  neutral, primary, tertiary,
  success, warning, error, info,
}: ColorMap) => ({
  text: {
    primary: neutral.lighter,
    secondary: neutral.dark,
    disabled: neutral.medium,
    error: error.medium,
    success: success.medium,
    warning: warning.medium,
    info: info.medium,
    link: primary.medium,
  },
  action: {
    focus: primary.medium,
    selected: neutral.light,
    active: neutral.medium,
    hover: neutral.dark,
    disabled: neutral.medium,
  },
  surface: {
    paperLight: neutral.dark,
    paper: neutral.darker,
    body: neutral.darkest,
    error: error.darker,
    success: success.darker,
    warning: warning.darker,
    info: info.darker,
  },
  border: {
    error: error.dark,
    success: success.dark,
    warning: warning.dark,
    info: info.dark,
    primary: {
      focus: primary.medium,
      active: tertiary.medium,
      hover: neutral.light,
      default: neutral.medium,
      disabled: neutral.dark,
    },
    secondary: {
      focus: primary.medium,
      active: tertiary.medium,
      hover: tertiary.light,
      default: tertiary.dark,
      disabled: tertiary.darker,
    },
  },
})

type Theme = ReturnType<typeof parseTheme>

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const loadTheme = (theme: SupportedTheme): Promise<any> => {
  if (!supportedThemes[theme as SupportedTheme]) {
    return import(`./${supportedThemes.default}`)
  }
  return import(`./${theme}`)
}

const getTheme = async (theme: SupportedTheme): Promise<Theme> => {
  const { map } = await loadTheme(theme)
  return parseTheme(map)
}

export const setTheme = (newTheme: SupportedTheme) => (
  window.dispatchEvent(new CustomEvent(themeEvents.change, { detail: newTheme }))
)

type ThemeProviderProps = {
  children: React.ReactNode
}

// this is what we call a hack :)
// it allows us to access theme vars using dot notation
// without blowing up when things aren't defined
const themeProxyHandler = {
  get: (target: Theme, prop: string): ValueOf<Theme> => {
    if (Object.hasOwn(target, prop)) {
      return target[prop as keyof Theme]
    }
    return new Proxy({} as Theme, themeProxyHandler) as unknown as ValueOf<Theme>
  },
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [themeName, setThemeName] = useStorage<SupportedTheme>('currentTheme', 'default')
  const [activeTheme, setActiveTheme] = useState<Theme | null>(null)
  const themeProxy = useMemo(() => (
    new Proxy<Theme>(activeTheme || {} as Theme, themeProxyHandler)
  ), [activeTheme])

  usePromise(async () => {
    const theme = await getTheme(themeName || 'default')
    setActiveTheme(theme)
  }, [themeName])

  useEffect(() => {
    const changeHandler = (e: CustomEvent) => {
      if (Object.hasOwn(supportedThemes, e.detail)) {
        setThemeName(e.detail)
      }
    }
    window.addEventListener(themeEvents.change, changeHandler)
    return () => window.removeEventListener(themeEvents.change, changeHandler)
  }, [])

  return (
    <StyledThemeProvider theme={themeProxy}>
      {children}
    </StyledThemeProvider>
  )
}

export { useTheme, styled }
