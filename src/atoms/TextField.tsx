import BaseTextField, { TextFieldProps } from '@mui/material/TextField'
import { styled } from 'theme'

export type Props = TextFieldProps & {
  compact?: boolean
}

const TextField = styled(BaseTextField)<Props>`
  div {
    ${({ compact }) => (compact ? 'height: 38px;' : '')}
  }
`

export default TextField
