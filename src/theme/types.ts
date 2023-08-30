export enum supportedThemes {
  light = 'light',
  default = 'default'
}

export type SupportedTheme = keyof typeof supportedThemes

export enum themeEvents {
  change = '1kin:theme:change'
}

type Intensity = {
  lighter: string
  light: string
  medium: string
  dark: string
  darker: string
}

type NeutralIntensity = Intensity & {
  white: string
  lightest: string
  darkest: string
  black: string
}

export type ColorMap = {
  neutral: NeutralIntensity
  primary: Intensity
  secondary: Intensity
  tertiary: Intensity
  contrast: Intensity
  success: Intensity
  warning: Intensity
  error: Intensity
  info: Intensity
}

type BorderCases = {
  focus: string
  active: string
  hover: string
  default: string
  disabled: string
}

export type Theme = {
  text: {
    primary: string
    secondary: string
    disabled: string
    error: string
    success: string
    warning: string
    info: string
  }
  action: {
    focus: string
    selected: string
    active: string
    hover: string
    disabled: string
  }
  surface: {
    paperLight: string
    paper: string
    body: string
    error: string
    success: string
    warning: string
    info: string
  }
  border: {
    error: string
    success: string
    warning: string
    info: string

    primary: BorderCases
    secondary: BorderCases
  }
}
