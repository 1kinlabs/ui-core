import { useMemo, useEffect } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import dynamic from 'next/dynamic'
import { useStorage } from 'hooks/useStorage'
import { supportedThemes, SupportedTheme, themeEvents } from './types'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [currentTheme, setCurrentTheme] = useStorage('currentTheme')

  const theme = useMemo(() => {
    if (!supportedThemes[currentTheme as SupportedTheme]) {
      setCurrentTheme(supportedThemes.default)
      return dynamic(() => import(`theme/${supportedThemes.default}`))
    } else {
      return dynamic(() => import(`theme/${currentTheme}`))
    }
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
