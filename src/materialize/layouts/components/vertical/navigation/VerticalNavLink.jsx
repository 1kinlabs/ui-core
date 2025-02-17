// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import { styled, useTheme } from '@mui/material/styles'
import ListItemButton from '@mui/material/ListItemButton'

// ** Configs Import
import themeConfig from 'materialize/theme/config'

// ** Custom Components Imports
import UserIcon from 'materialize/components/UserIcon'
import Translations from 'materialize/components/Translations'

// ** Utils
import { handleURLQueries } from 'materialize/layouts/utils'

// ** Styled Components
const MenuNavLink = styled(ListItemButton)(({ theme }) => ({
  width: '100%',
  borderRadius: 8,
  transition: 'padding-left .25s ease-in-out',
  '&.active': {
    '&, &:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    '& .MuiTypography-root': {
      fontWeight: 500,
      color: `${theme.palette.background.default} !important`,
    },
    '& .MuiListItemIcon-root': {
      color: `${theme.palette.background.default} !important`,
    },
  },
}))

const MenuItemTextMetaWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' }),
})

function VerticalNavLink({
  item,
  parent,
  navHover,
  settings,
  navVisible,
  isSubToSub,
  collapsedNavWidth,
  toggleNavVisibility,
  navigationBorderWidth,
}) {
  // ** Hooks
  const theme = useTheme()
  const router = useRouter()

  // ** Vars
  const { skin, navCollapsed } = settings
  const IconTag = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon

  const conditionalIconColor = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return {
        color: `rgba(${theme.palette.customColors.dark}, ${parent ? 0.68 : 0.87})`,
      }
    } if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return {
        color: `rgba(${theme.palette.customColors.light}, ${parent ? 0.68 : 0.87})`,
      }
    } return {
      color: parent ? theme.palette.text.secondary : theme.palette.text.primary,
    }
  }

  const conditionalBgColor = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return {
        '&:hover': {
          backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.05)`,
        },
      }
    } if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return {
        '&:hover': {
          backgroundColor: `rgba(${theme.palette.customColors.light}, 0.05)`,
        },
      }
    } return {}
  }

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    }
    return false
  }

  return (
    <ListItem
      disablePadding
      className="nav-link"
      disabled={item.disabled || false}
      sx={{
        mt: 1.5,
        transition: 'padding .25s ease-in-out',
        px: parent ? '0 !important' : `${theme.spacing(navCollapsed && !navHover ? 2 : 3)} !important`,
      }}
    >
      <Link passHref legacyBehavior href={item.path === undefined ? '/' : `${item.path}`}>
        <MenuNavLink
          component="a"
          className={isNavLinkActive() ? 'active' : ''}
          {...(item.openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
          onClick={(e) => {
            if (item.path === undefined) {
              e.preventDefault()
              e.stopPropagation()
            }
            if (navVisible) {
              toggleNavVisibility()
            }
          }}
          sx={{
            py: 2.25,
            ...conditionalBgColor(),
            ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
            pr: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 24 - 16) / 8 : 3,
            pl: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 24 - 16) / 8 : 4,
          }}
        >
          {isSubToSub ? null : (
            <ListItemIcon
              sx={{
                ...conditionalIconColor(),
                transition: 'margin .25s ease-in-out',
                ...(navCollapsed && !navHover ? { mr: 0 } : { mr: 2 }),
                ...(parent ? { ml: 2, mr: 4 } : {}), // This line should be after (navCollapsed && !navHover) condition for proper styling
              }}
            >
              <UserIcon
                icon={IconTag}
                componentType="vertical-menu"
                iconProps={{
                  sx: {
                    ...(!parent ? { fontSize: '1.5rem' } : { fontSize: '0.5rem' }),
                    ...(parent && item.icon ? { fontSize: '0.875rem' } : {}),
                  },
                }}
              />
            </ListItemIcon>
          )}

          <MenuItemTextMetaWrapper
            sx={{
              ...(isSubToSub ? { ml: 8 } : {}),
              ...(navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }),
            }}
          >
            <Typography
              {...((themeConfig.menuTextTruncate || (!themeConfig.menuTextTruncate && navCollapsed && !navHover)) && {
                noWrap: true,
              })}
            >
              <Translations text={item.title} />
            </Typography>
            {item.badgeContent ? (
              <Chip
                size="small"
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{ ml: 1.5, '& .MuiChip-label': { px: 2.5, lineHeight: 1.385, textTransform: 'capitalize' } }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </Link>
    </ListItem>
  )
}

export default VerticalNavLink
