import { Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import { calculateProgressPercentage } from 'utils/calculate-progress-percentage'

import styled from 'styled-components'

type Props = {
    className?: string,
    claimed: number,
    totalAvailable: number
}

const ClaimProgress = styled(({ className, claimed, totalAvailable } : Props) => (
  <div className={className}>
    <Typography variant="h6">
      {`Claimed: ${claimed} / ${totalAvailable}`}
    </Typography>
    <LinearProgress variant="determinate" value={calculateProgressPercentage(claimed, totalAvailable)} />
  </div>
))`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export default ClaimProgress
