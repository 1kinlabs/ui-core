import { styled } from 'theme'
import Section from 'atoms/Section'
import { Typography } from '@mui/material'
import { replaceLinkWithHyperlink } from 'utils/replace-link-with-hyperlink'
import ClaimCode from './ClaimCode'

export type Props = {
  className?: string,
  claimCode?: string,
  claimInstructions: string
}

const ClaimInstructions = styled.div`
  white-space: pre-line;
`

const NextSteps = styled(({ className, claimCode, claimInstructions } : Props) => (
  <Section className={className} title="Next Steps">
    <Typography variant="body2" fontWeight={600}>
      {"You've claimed your content, but you're not finished yet! Follow the instructions below in order to complete the process."}
    </Typography>
    <ClaimCode code={claimCode} />
    <ClaimInstructions dangerouslySetInnerHTML={{ __html: replaceLinkWithHyperlink(claimInstructions) }} />
  </Section>
))`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default NextSteps
