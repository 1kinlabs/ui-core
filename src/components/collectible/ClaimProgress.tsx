import { Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import { calculateProgressPercentage } from 'utils/calculate-progress-percentage'
import { Collectible } from 'types/Collectible'
import { getAvailableCodes } from 'utils/collectible'

import styled from 'styled-components'

type Props = {
  className?: string,
  collectible: Collectible
}

const ClaimProgress = styled<React.FC<Props>>(({ className, collectible } : Props) => {
  const availableCodes = getAvailableCodes(collectible)
  const totalCount = collectible?.total_count || 0

  const text = availableCodes > 99
    ? '100+ Left'
    : `${Math.max(availableCodes, 0)} Left`

  const progress = calculateProgressPercentage(totalCount - availableCodes, totalCount)

  return (
    <div className={className}>
      <Typography variant="h6">
        {text}
      </Typography>
      <LinearProgress className={progress > 70 ? 'urgent' : ''} variant="determinate" value={progress} />
    </div>
  )
})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .urgent {
    .MuiLinearProgress-bar {
      background-color: ${({ theme }) => theme.progress.urgent.foreground};
    }
  }
`

export default ClaimProgress
