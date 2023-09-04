// ** Theme Override Imports
import palette from './palette'
import spacing from './spacing'
import shadows from './shadows'
import typography from './typography'
import breakpoints from './breakpoints'

const themeOptions = (settings) => {
  // ** Vars
  const { skin, mode, direction } = settings

  return ({
    direction,
    palette: palette(mode, skin),
    typography,
    shadows: shadows(mode),
    ...spacing,
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 10,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  })
}

export default themeOptions
