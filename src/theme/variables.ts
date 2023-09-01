import { ColorMap } from './types'

export const getVariables = ({
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
