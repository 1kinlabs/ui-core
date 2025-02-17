// ** Util Import
import { hexToRGBA } from 'materialize/utils/hex-to-rgba'

const Tooltip = (theme) => ({
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: 6,
        lineHeight: 1.455,
        backgroundColor: hexToRGBA(theme.palette.customColors.tooltipBg, 0.9),
      },
      arrow: {
        color: hexToRGBA(theme.palette.customColors.tooltipBg, 0.9),
      },
    },
  },
})

export default Tooltip
