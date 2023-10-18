import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import { ValueOf } from 'types/ValueOf'
import { useStorage } from 'hooks/useStorage'
import { usePromise } from 'hooks/usePromise'
import { getVariables } from './variables'
import {
  supportedThemes, SupportedTheme, themeEvents, ColorMap,
} from './types'

import ThemeComponent from 'materialize/theme/ThemeComponent'
import { SettingsProvider, SettingsConsumer } from 'materialize/context/settingsContext'

// Just redefining this here to avoid circular deps
type Theme = ReturnType<typeof getVariables>

type ThemeImport = Promise<{
  map: ColorMap
}>

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const loadTheme = (theme: SupportedTheme): ThemeImport => {
  if (!supportedThemes[theme]) {
    return import(`./${supportedThemes.default}`) as ThemeImport
  }
  return import(`./${theme}`) as ThemeImport
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
  children: React.ReactNode,
  pageSettings?: any
}

export function ThemeProvider({ children, pageSettings = {} }: ThemeProviderProps): JSX.Element {
  const [themeName, setThemeName] = useStorage<SupportedTheme>('currentTheme', 'default')
  const [activeTheme, setActiveTheme] = useState<Theme | null>(null)

  usePromise(async () => {
    const theme = await getTheme(themeName || 'default')
    setActiveTheme(theme)
  }, [themeName])

  useEffect(() => {
    const changeHandler = (e: CustomEvent) => {
      if (Object.hasOwn(supportedThemes, e.detail as SupportedTheme)) {
        setThemeName(e.detail as SupportedTheme)
      }
    }
    window.addEventListener(themeEvents.change, changeHandler)
    return () => window.removeEventListener(themeEvents.change, changeHandler)
  }, [])

  if (!activeTheme) {
    return <div />
  }

  return (
    <StyledThemeProvider theme={activeTheme}>
      <SettingsProvider pageSettings={pageSettings}>
        <SettingsConsumer>
          {({ settings }) => (
            <ThemeComponent settings={settings}>
              {children}
            </ThemeComponent>
          )}
        </SettingsConsumer>
      </SettingsProvider>
    </StyledThemeProvider>
  )
}
