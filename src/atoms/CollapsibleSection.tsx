import {
  Typography, Accordion, AccordionSummary, AccordionDetails, AccordionProps,
} from '@mui/material'
import { styled } from 'styled-components'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { BaseProps } from 'types/Section'

export type Props = BaseProps & AccordionProps & {
  title: string,
}

const CollapsibleSection = styled(({
  children, className, title, defaultExpanded = true,
} : Props) => (
  <Accordion defaultExpanded={defaultExpanded}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >
      <Typography variant="h6" fontWeight={500}>
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails className={className}>
      {children}
    </AccordionDetails>
  </Accordion>
))``

export default CollapsibleSection
