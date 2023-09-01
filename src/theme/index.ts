<<<<<<< HEAD
import { Theme, ColorMap, SupportedTheme, themeEvents } from './types'
=======
import { useTheme } from '@emotion/react'
import {
  Theme, ColorMap, SupportedTheme, themeEvents,
} from './types'
>>>>>>> d496d8f (fix issues preventing ThemeProvider from working)

export const setTheme = (newTheme: SupportedTheme) => (
  window.dispatchEvent(new CustomEvent(themeEvents.change, { detail: newTheme }))
)

export const getTheme = ({
  neutral, primary, tertiary,
<<<<<<< HEAD
  success, warning, error, info
=======
  success, warning, error, info,
>>>>>>> d496d8f (fix issues preventing ThemeProvider from working)
}: ColorMap): Theme => ({
  text: {
    primary: neutral.lighter,
    secondary: neutral.dark,
    disabled: neutral.medium,
    error: error.medium,
    success: success.medium,
    warning: warning.medium,
    info: info.medium,
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
<<<<<<< HEAD
      disabled: neutral.dark
=======
      disabled: neutral.dark,
>>>>>>> d496d8f (fix issues preventing ThemeProvider from working)
    },
    secondary: {
      focus: primary.medium,
      active: tertiary.medium,
      hover: tertiary.light,
      default: tertiary.dark,
<<<<<<< HEAD
      disabled: tertiary.darker
    }
  }
})
=======
      disabled: tertiary.darker,
    },
  },
})

export { useTheme }
>>>>>>> d496d8f (fix issues preventing ThemeProvider from working)
