import { map } from 'theme/default'

const DefaultPalette = (mode) => {
  // ** Vars
  const lightColor = '76, 78, 100'
  const darkColor = '234, 234, 255'
  const mainColor = mode === 'light' ? lightColor : darkColor

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      darkBg: map.neutral.darker,
      lightBg: map.neutral.dark,
      bodyBg: map.neutral.darker,
      tooltipBg: mode === 'light' ? '#262732' : '#464A65',
      tableHeaderBg: mode === 'light' ? '#F5F5F7' : '#3A3E5B',
    },
    common: {
      black: map.neutral.black,
      white: map.neutral.white,
    },
    mode,
    primary: {
      light: map.primary.medium,
      main: map.primary.medium,
      dark: map.primary.dark,
      contrastText: map.neutral.black,
    },
    secondary: {
      light: map.secondary.light,
      main: map.secondary.medium,
      dark: map.secondary.dark,
      contrastText: map.neutral.white,
    },
    success: {
      light: map.success.light,
      main: map.success.medium,
      dark: map.success.dark,
      contrastText: map.neutral.white,
    },
    error: {
      light: map.error.light,
      main: map.error.medium,
      dark: map.error.dark,
      contrastText: map.neutral.white,
    },
    warning: {
      light: map.warning.light,
      main: map.warning.medium,
      dark: map.warning.dark,
      contrastText: map.neutral.white,
    },
    info: {
      light: map.info.light,
      main: map.info.medium,
      dark: map.info.dark,
      contrastText: map.neutral.white,
    },
    grey: {
      50: map.neutral.white,
      100: map.neutral.lightest,
      200: map.neutral.lighter,
      300: map.neutral.lighter,
      400: map.neutral.light,
      500: map.neutral.light,
      600: map.neutral.medium,
      700: map.neutral.medium,
      800: map.neutral.dark,
      900: map.neutral.dark,
      A100: map.neutral.darker,
      A200: map.neutral.darker,
      A400: map.neutral.darkest,
      A700: map.neutral.darkest,
    },
    text: {
      primary: map.neutral.lighter,
      secondary: map.neutral.dark,
      disabled: map.neutral.medium,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: map.neutral.darker,
      default: map.neutral.darkest,
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.05)`,
      hoverOpacity: 0.05,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
    faq: {
      dark: '#101121',
      light: '#30334E',
    },
  }
}

export default DefaultPalette
