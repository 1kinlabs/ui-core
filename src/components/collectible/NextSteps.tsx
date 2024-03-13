import { styled } from 'theme'
import Section from 'atoms/Section'
import { Typography } from '@mui/material'
import DangerDiv from 'atoms/DangerDiv'

import { Claim } from 'types/Claim'
import { Collectible } from 'types/Collectible'
import { ClaimStatus } from 'enums/ClaimStatus'
import CopyInput from '../CopyInput'

export type Props = {
  className?: string,
  defaultExpanded?: boolean,
  collectible: Collectible,
  claim: Claim
}

const NextSteps = styled(({
  className, collectible, claim, defaultExpanded,
} : Props) => (
  <Section className={className} title={collectible.claimStatus === ClaimStatus.COMPLETED ? 'Next Steps (completed)' : 'Next Steps'} collapsible defaultExpanded={defaultExpanded}>
    <Typography variant="body2" fontWeight={600}>
      {"You've claimed your content, but you're not finished yet! Follow the instructions below in order to complete the process."}
    </Typography>
    <CopyInput value={claim.claim_code || '######'} disabled={!claim.claim_code} label="Redemption Code" />
    <DangerDiv htmlString={collectible.claim_instructions} />
  </Section>
))`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default NextSteps
