import { hexToRGBA } from 'utils/hexToRGBA'
import { spacing } from 'css/spacing'
import { ColorMap } from './types'

export const getVariables = ({
  neutral, primary, secondary, tertiary,
  success, warning, error, info,
  brand,
}: ColorMap) => ({
  spacing: (i: number) => spacing[i] ?? '0px',
  text: {
    light: neutral.lightest,
    primary: neutral.lightest,
    secondary: neutral.lighter,
    hover: neutral.white,
    disabled: neutral.light,
    error: error.medium,
    success: success.medium,
    warning: warning.medium,
    info: info.medium,
    link: primary.medium,
    callout: secondary.medium,
  },
  action: {
    focus: tertiary.medium,
    selected: primary.medium,
    active: neutral.light,
    hover: neutral.lighter,
    disabled: neutral.medium,
  },
  surface: {
    paperLight: neutral.dark,
    paper: neutral.darker,
    paperAlpha: hexToRGBA(neutral.darker, 0.8),
    body: neutral.darkest,
    bodyAlpha: hexToRGBA(neutral.darkest, 0.8),
    error: error.darker,
    success: success.darker,
    warning: warning.dark,
    info: info.darker,
    callout: secondary.medium,
  },
  border: {
    radius: '5px',
    error: error.dark,
    success: success.dark,
    warning: warning.dark,
    info: info.dark,
    primary: {
      focus: tertiary.medium,
      active: primary.medium,
      hover: neutral.lighter,
      default: neutral.light,
      disabled: neutral.medium,
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
  brand: {
    amazon: '#FFD235',
    google: '#FF4D49',
    twitter: '#FFF',
    discord: '#925CFF',
  },
  progress: {
    foreground: primary.medium,
    urgent: {
      foreground: error.dark,
    },
  },
})
