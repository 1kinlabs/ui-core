import {
  Accordion, AccordionSummary, AccordionDetails, Typography,
} from '@mui/material'
import Section from 'atoms/Section'
import { styled } from 'theme'
import { FaqList } from 'types/Faq'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export type Props = {
  className?: string,
  faqs?: FaqList | null
}

const FAQ = styled(({ faqs, className } : Props) => (faqs ? (
  <Section title="Frequently Asked Questions">
    {
      faqs.map((faq) => (
        <Accordion square key={faq.question} className={className}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="body1">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {faq.answer}
          </AccordionDetails>
        </Accordion>
      ))
    }

  </Section>
) : null))`
  && {
    background-color: ${({ theme }) => theme.surface.body};
  }
`

export default FAQ
