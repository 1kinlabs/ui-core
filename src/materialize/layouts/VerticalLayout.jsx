// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Fab from '@mui/material/Fab'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
import themeConfig from 'materialize/theme/config'

// ** Components
import Customizer from 'materialize/components/customizer'
import ScrollToTop from 'materialize/components/scroll-to-top'
import DatePickerWrapper from 'materialize/styles/libs/react-datepicker'
import AppBar from './components/vertical/appBar'
import Navigation from './components/vertical/navigation'
import Footer from './components/shared-components/footer'

// ** Styled Component

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex',
})

const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}))

function VerticalLayout(props) {
  // ** Props
  const {
    hidden, settings, children, scrollToTop,
  } = props

  // ** Vars
  const { skin, navHidden, contentWidth } = settings
  const { navigationSize, disableCustomizer, collapsedNavigationSize } = themeConfig
  const navWidth = navigationSize
  const navigationBorderWidth = skin === 'bordered' ? 1 : 0
  const collapsedNavWidth = collapsedNavigationSize

  // ** States
  const [navHover, setNavHover] = useState(false)
  const [navVisible, setNavVisible] = useState(false)

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible)

  const mediaSx = {
    mx: 'auto',
    '@media (min-width:1440px)': { maxWidth: 1440 },
    '@media (min-width:1200px)': { maxWidth: '100%' },
  }

  return (
    <>
      <VerticalLayoutWrapper className="layout-wrapper">
        {navHidden
        && themeConfig.layout === 'vertical'
        && !(navHidden && settings.lastLayout === 'horizontal') ? null : (
          <Navigation
              navWidth={navWidth}
              navHover={navHover}
              navVisible={navVisible}
              setNavHover={setNavHover}
              setNavVisible={setNavVisible}
              collapsedNavWidth={collapsedNavWidth}
              toggleNavVisibility={toggleNavVisibility}
              navigationBorderWidth={navigationBorderWidth}
              {...props}
            />
          )}
        <MainContentWrapper className="layout-content-wrapper">
          <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />

          <ContentWrapper
            className="layout-page-content"
            sx={{
              ...(contentWidth === 'boxed' && mediaSx),
            }}
          >
            {children}
          </ContentWrapper>

          <Footer {...props} />

          <DatePickerWrapper sx={{ zIndex: 11 }}>
            <Box id="react-datepicker-portal" />
          </DatePickerWrapper>
        </MainContentWrapper>
      </VerticalLayoutWrapper>

      {disableCustomizer || hidden ? null : <Customizer />}

      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className="mui-fixed">
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </>
  )
}

export default VerticalLayout
