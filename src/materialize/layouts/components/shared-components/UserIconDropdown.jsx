// ** React Imports
import { useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import LogoutVariant from 'mdi-material-ui/LogoutVariant'
import AccountOutline from 'mdi-material-ui/AccountOutline'

import UserAvatar from './UserAvatar'

export default function UserIconDropdown({ settings, logout, user }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const router = useRouter()

  const { direction } = settings

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = (url) => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary',
    },
  }

  const handleLogout = () => {
    logout()
    handleDropdownClose()
  }

  return (
    <>
      <UserAvatar user={user} onClick={handleDropdownOpen} />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, mt: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <Box sx={{ pt: 2, pb: 3, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <UserAvatar user={user} />
            <Box sx={{
              display: 'flex', ml: 3, alignItems: 'flex-start', flexDirection: 'column',
            }}
            >
              <Typography sx={{ fontWeight: 600 }}>{user?.username}</Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: 0, mb: 1 }} />
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('/profile')}>
          <Box sx={styles}>
            <AccountOutline sx={{ mr: 2 }} />
            {'Profile'}
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ py: 2 }} onClick={handleLogout}>
          <LogoutVariant sx={{ mr: 2, fontSize: '1.375rem', color: 'text.secondary' }} />
          {'Logout'}
        </MenuItem>
      </Menu>
    </>
  )
}
