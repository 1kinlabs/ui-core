// ** MUI Import
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const Spinner = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <img width={80} height={80} alt={`logo`} src={`/images/1kin-symbol-white.svg`} />
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default Spinner
