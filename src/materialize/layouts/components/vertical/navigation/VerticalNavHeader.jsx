// ** Next Import
import Link from 'next/link'

import { styled } from 'theme'
import { Logo as BaseLogo } from 'components/Logo'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { styled as muiStyled } from '@mui/material/styles'

// ** Icons
import Close from 'mdi-material-ui/Close'

const Logo = styled(BaseLogo)`
  width: 64px;
  height: 24px;
`

// ** Styled Components
const MenuHeaderWrapper = muiStyled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingRight: theme.spacing(4),
  justifyContent: 'space-between',
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight,
}))

const StyledLink = muiStyled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
})

function VerticalNavHeader(props) {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    verticalNavMenuBranding: userVerticalNavMenuBranding,
  } = props

  const { navCollapsed } = settings

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userVerticalNavMenuBranding) {
        return 0
      }
      return (collapsedNavWidth - navigationBorderWidth - 40) / 8
    }
    return 5.5
  }

  return (
    <MenuHeaderWrapper className="nav-header" sx={{ pl: menuHeaderPaddingLeft() }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <StyledLink href="/">
          <Logo />
        </StyledLink>
      )}

      {hidden && (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={toggleNavVisibility}
          sx={{ p: 0, backgroundColor: 'transparent !important' }}
        >
          <Close fontSize="small" />
        </IconButton>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
