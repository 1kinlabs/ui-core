// ** MUI Import
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from 'theme'
import { Logo as BaseLogo } from 'components/Logo'

const Logo = styled(BaseLogo)`
  width: 80px;
  height: 80px;
`

function Spinner() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Logo small />
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default Spinner
