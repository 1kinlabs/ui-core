import { useMemo, useEffect } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { useStorage } from 'hooks/useStorage'
import { supportedThemes, SupportedTheme, themeEvents } from './types'

type Props = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: Props) {
  const [currentTheme, setCurrentTheme] = useStorage('currentTheme')

  const theme = useMemo(() => {
    if (!supportedThemes[currentTheme as SupportedTheme]) {
      setCurrentTheme(supportedThemes.default)
      return () => import(`./${supportedThemes.default}`)
    }
    return () => import(`./${currentTheme}`)
  }, [currentTheme])

  useEffect(() => {
    window.addEventListener(themeEvents.change, (e: CustomEvent) => {
      setCurrentTheme(e.detail)
    })
  }, [])

  return (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  )
}
