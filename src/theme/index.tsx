import { useTheme, styled } from 'styled-components'
import { getVariables } from './variables'
import { SupportedTheme, themeEvents } from './types'
import { ThemeProvider } from './ThemeProvider'

export type Theme = ReturnType<typeof getVariables>

export const setTheme = (newTheme: SupportedTheme) => (
  window.dispatchEvent(new CustomEvent(themeEvents.change, { detail: newTheme }))
)

export { useTheme, styled, ThemeProvider }
