import { Card, CardContent as BaseCardContent, Typography } from '@mui/material'
import { styled } from 'styled-components'
import { NonCollapsibleProps, CollapsibleProps } from 'types/Section'
import CollapsibleSection from './CollapsibleSection'

export type Props = NonCollapsibleProps | CollapsibleProps;

const CardContent = styled(BaseCardContent)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

function Title({ title } : { title?: string}) {
  return title ? (
    <Typography variant="h6" fontWeight={500}>
      {title}
    </Typography>
  ) : null
}

const Section = styled(({
  children, className, title, collapsible, defaultExpanded = true,
} : Props) => (collapsible ? (
  <CollapsibleSection title={title} className={className} defaultExpanded={defaultExpanded}>
    {children}
  </CollapsibleSection>
) : (
  <Card>
    <CardContent>
      <Title title={title} />
      <div className={className}>
        {children}
      </div>
    </CardContent>
  </Card>
)))``

export default Section
