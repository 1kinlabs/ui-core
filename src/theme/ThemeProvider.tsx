import { useMemo, useEffect } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import dynamic from 'next/dynamic'
import { useStorage } from 'hooks/useStorage'
import { supportedThemes, SupportedTheme, themeEvents } from './types'

type Props = {
  children: React.ReactNode
}

<<<<<<< HEAD
export const ThemeProvider = ({ children }: Props) => {
=======
export function ThemeProvider({ children }: Props) {
>>>>>>> d496d8f (fix issues preventing ThemeProvider from working)
  const [currentTheme, setCurrentTheme] = useStorage('currentTheme')

  const theme = useMemo(() => {
    if (!supportedThemes[currentTheme as SupportedTheme]) {
      setCurrentTheme(supportedThemes.default)
<<<<<<< HEAD
      return dynamic(() => import(`theme/${supportedThemes.default}`))
    } else {
      return dynamic(() => import(`theme/${currentTheme}`))
    }
=======
      return () => import(`./${supportedThemes.default}`)
    }
    return () => import(`./${currentTheme}`)
>>>>>>> d496d8f (fix issues preventing ThemeProvider from working)
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
