import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { useEffect, useState, useMemo } from 'react'
import { ValueOf } from 'types/ValueOf'
import { useStorage } from 'hooks/useStorage'
import { usePromise } from 'hooks/usePromise'
import { getVariables } from './variables'
import {
  supportedThemes, SupportedTheme, themeEvents,
} from './types'

// Just redefining this here to avoid circular deps
type Theme = ReturnType<typeof getVariables>

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const loadTheme = (theme: SupportedTheme): Promise<any> => {
  if (!supportedThemes[theme as SupportedTheme]) {
    return import(`./${supportedThemes.default}`)
  }
  return import(`./${theme}`)
}

const getTheme = async (theme: SupportedTheme): Promise<Theme> => {
  const { map } = await loadTheme(theme)
  return getVariables(map)
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

type ThemeProviderProps = {
  children: React.ReactNode
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
