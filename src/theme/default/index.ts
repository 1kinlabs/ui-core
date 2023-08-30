import { colors } from './colors'
import { ColorMap } from '../types'

export const map: ColorMap = {
  neutral: {
    white: colors.neutral100,
    lightest: colors.neutral200,
    lighter: colors.neutral300,
    light: colors.neutral400,
    medium: colors.neutral500,
    dark: colors.neutral600,
    darker: colors.neutral700,
    darkest: colors.neutral800,
    black: colors.neutral900,
  },
  primary: {
    lighter: colors.cyan100,
    light: colors.cyan200,
    medium: colors.cyan300,
    dark: colors.cyan400,
    darker: colors.cyan500,
  },
  secondary: {
    lighter: colors.magenta100,
    light: colors.magenta200,
    medium: colors.magenta300,
    dark: colors.magenta400,
    darker: colors.magenta500,
  },
  tertiary: {
    lighter: colors.purple100,
    light: colors.purple200,
    medium: colors.purple300,
    dark: colors.purple400,
    darker: colors.purple500,
  },
  contrast: {
    lighter: colors.green100,
    light: colors.green200,
    medium: colors.green300,
    dark: colors.green400,
    darker: colors.green500,
  },
  success: {
    lighter: colors.green100,
    light: colors.green200,
    medium: colors.green300,
    dark: colors.green400,
    darker: colors.green500,
  },
  warning: {
    lighter: colors.yellow100,
    light: colors.yellow200,
    medium: colors.yellow300,
    dark: colors.yellow400,
    darker: colors.yellow500,
  },
  error: {
    lighter: colors.red100,
    light: colors.red200,
    medium: colors.red300,
    dark: colors.red400,
    darker: colors.red500,
  },
  info: {
    lighter: colors.cyan100,
    light: colors.cyan200,
    medium: colors.cyan300,
    dark: colors.cyan400,
    darker: colors.cyan500,
  },
}
