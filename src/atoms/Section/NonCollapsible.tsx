import { Card, CardContent as BaseCardContent, Typography } from '@mui/material'
import { styled } from 'styled-components'
import { NonCollapsibleProps } from 'types/Section'

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

const NonCollapsibleSection = styled(({
  children, className, title,
} : NonCollapsibleProps) => (
  <Card className={className}>
    <CardContent>
      <Title title={title} />
      {children}
    </CardContent>
  </Card>
))``

export default NonCollapsibleSection
