/* eslint-disable react/jsx-props-no-spreading */
import { Dispatch, SetStateAction } from 'react'
import BaseTextField, { TextFieldProps } from '@mui/material/TextField'
import styled from 'styled-components'

export type Props = Omit<TextFieldProps, 'onChange'> & {
  className?: string
  compact?: boolean
  onChange?: Dispatch<SetStateAction<string>> | ((value: string) => void)
}

const TextField = styled(({ className, onChange, ...props }: Props) => (
  <BaseTextField
    className={className}
    {...props}
    onChange={(e) => onChange?.(e.target.value)}
  />
))`
  div {
    ${({ compact }) => (compact && 'height: 38px;')}
  }
`

export default TextField
