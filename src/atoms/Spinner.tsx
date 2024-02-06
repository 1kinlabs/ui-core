// ** MUI Import
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from 'theme'
import { Logo as BaseLogo } from 'components/Logo'

const Logo = styled(BaseLogo)`
  width: 80px;
  height: 80px;
`

type Props = {
  className?: string
  noLogo?: boolean
}

const Spinner = styled(({ className, noLogo }: Props) => (
  <Box
    className={className}
    sx={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    {!noLogo && <Logo small />}
    <CircularProgress disableShrink sx={{ mt: 6 }} />
  </Box>
))`
  
`

export default Spinner
