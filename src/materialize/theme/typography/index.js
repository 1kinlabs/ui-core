import { map } from 'theme/default'
import { getVariables } from 'theme/variables'

const theme = getVariables(map)

const Typography = {
  fontFamily: [
    'Inter',
    'sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  h1: {
    fontWeight: 500,
    letterSpacing: '-1.5px',
    color: theme.text.primary,
  },
  h2: {
    fontWeight: 500,
    letterSpacing: '-0.5px',
    color: theme.text.primary,
  },
  h3: {
    fontWeight: 500,
    letterSpacing: 0,
    color: theme.text.primary,
  },
  h4: {
    fontWeight: 500,
    letterSpacing: '0.25px',
    color: theme.text.primary,
  },
  h5: {
    fontWeight: 500,
    letterSpacing: 0,
    color: theme.text.primary,
  },
  h6: {
    letterSpacing: '0.15px',
    color: theme.text.primary,
  },
  subtitle1: {
    letterSpacing: '0.15px',
    color: theme.text.primary,
  },
  subtitle2: {
    letterSpacing: '0.1px',
    color: theme.text.secondary,
  },
  body1: {
    letterSpacing: '0.15px',
    color: theme.text.primary,
  },
  body2: {
    lineHeight: 1.429,
    letterSpacing: '0.15px',
    color: theme.text.secondary,
  },
  button: {
    letterSpacing: '0.4px',
    color: theme.text.primary,
  },
  caption: {
    lineHeight: 1.25,
    letterSpacing: '0.4px',
    color: theme.text.secondary,
  },
  overline: {
    letterSpacing: '1px',
    color: theme.text.secondary,
  },
}

export default Typography
