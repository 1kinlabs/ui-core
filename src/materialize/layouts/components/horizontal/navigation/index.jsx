// ** MUI Imports
import Box from '@mui/material/Box'

// ** Config Import
import themeConfig from 'materialize/theme/config'

// ** Utils
// import { hexToRGBA } from 'materialize/utils/hex-to-rgba'
// ** Menu Components
import HorizontalNavItems from './HorizontalNavItems'

function Navigation(props) {
  return (
    <Box
      className="menu-content"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '& > *': {
          '&:not(:last-child)': { mr: 2 },
          ...(themeConfig.menuTextTruncate && { maxWidth: 220 }),
        },
      }}
    >
      <HorizontalNavItems {...props} />
    </Box>
  )
}

export default Navigation
