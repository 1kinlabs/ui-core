import {
  Typography, Accordion as BaseAccordion, AccordionSummary, AccordionDetails as BaseAccordionDetails, AccordionProps,
} from '@mui/material'
import { styled } from 'styled-components'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { BaseProps } from 'types/Section'

export type Props = BaseProps & AccordionProps & {
  title: string,
}

const Accordion = styled(BaseAccordion)`
  && {
    border-radius: 8px;
    margin: 0;

    &::before {
      content: none;
    }
  }
`

const AccordionDetails = styled(BaseAccordionDetails)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const CollapsibleSection = styled(({
  children, className, title, defaultExpanded = true,
} : Props) => (
  <Accordion defaultExpanded={defaultExpanded} className={className}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >
      <Typography variant="h6" fontWeight={500}>
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      {children}
    </AccordionDetails>
  </Accordion>
))``

export default CollapsibleSection
