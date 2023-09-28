// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'

// ** Theme Config
import themeConfig from 'materialize/theme/config'

// ** Direction component for LTR or RTL
import { TextDirection } from 'components/TextDirection'

// ** Theme Override Imports
import overrides from './overrides'
import typography from './typography'

// ** Theme
import themeOptions from './ThemeOptions'

// ** Global Styles
import GlobalStyling from './globalStyles'

function ThemeComponent(props) {
  // ** Props
  const { settings, children } = props

  // ** Merged ThemeOptions of Core and User
  const coreThemeConfig = themeOptions(settings)

  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig)

  const components = overrides(theme, settings)

  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components,
    typography,
  })

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return (
    <ThemeProvider theme={theme}>
      <TextDirection direction={settings.direction}>
        <CssBaseline />
        <GlobalStyles styles={() => GlobalStyling(theme, settings)} />
        {children}
      </TextDirection>
    </ThemeProvider>
  )
}

export default ThemeComponent
