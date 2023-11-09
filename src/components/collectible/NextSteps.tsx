import { styled } from 'theme'
import Section from 'atoms/Section'
import { Typography } from '@mui/material'
import DangerDiv from 'atoms/DangerDiv'

import ClaimCode from './ClaimCode'

export type Props = {
  className?: string,
  claimCode?: string,
  claimInstructions: string
}

const NextSteps = styled(({ className, claimCode, claimInstructions } : Props) => (
  <Section className={className} title="Next Steps" collapsible>
    <Typography variant="body2" fontWeight={600}>
      {"You've claimed your content, but you're not finished yet! Follow the instructions below in order to complete the process."}
    </Typography>
    <ClaimCode code={claimCode} />
    <DangerDiv htmlString={claimInstructions} />
  </Section>
))`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default NextSteps
