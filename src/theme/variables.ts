import { hexToRGBA } from 'utils/hexToRGBA'
import { ColorMap } from './types'

export const getVariables = ({
  neutral, primary, tertiary,
  success, warning, error, info,
  brand,
}: ColorMap) => ({
  text: {
    light: neutral.lightest,
    primary: neutral.lighter,
    secondary: neutral.light,
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
    paperAlpha: hexToRGBA(neutral.darkest, 0.8),
    body: neutral.darkest,
    error: error.darker,
    success: success.darker,
    warning: warning.dark,
    info: info.darker,
  },
  border: {
    radius: '5px',
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
  button: {
    text: neutral.darkest,
    disabled: {
      text: neutral.light,
    },
    google: {
      primary: brand.google.medium,
      hover: brand.google.dark,
    },
    twitter: {
      primary: brand.twitter.medium,
      hover: brand.twitter.dark,
    },
    discord: {
      primary: brand.discord.medium,
      hover: brand.discord.dark,
    },
  },
})
