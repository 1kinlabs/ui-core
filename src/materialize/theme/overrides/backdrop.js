// ** Util Import
import { hexToRGBA } from 'materialize/utils/hex-to-rgba'

const Backdrop = (theme) => ({
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor:
            theme.palette.mode === 'light'
              ? `rgba(${theme.palette.customColors.main}, 0.5)`
              : hexToRGBA('#101121', 0.87),
      },
      invisible: {
        backgroundColor: 'transparent',
      },
    },
  },
})

export default Backdrop
