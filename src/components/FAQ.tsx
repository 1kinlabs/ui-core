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
  <Section title="Frequently Asked Questions" className={className}>
    <div>
      {
        faqs.map((faq) => (
          <Accordion square key={faq.question} className="accordion">
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
    </div>
  </Section>
) : null))`
  && {
    .accordion {
      background-color: ${({ theme }) => theme.surface.body};
    }
  }
`

export default FAQ
