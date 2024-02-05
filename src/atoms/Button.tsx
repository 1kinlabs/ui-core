/* eslint-disable react/jsx-props-no-spreading */
import BaseButton, { ButtonProps } from '@mui/material/Button'
import { styled } from 'theme'

export type Props = ButtonProps | (
  Omit <ButtonProps, 'onClick'> & { onClick: () => void }
)

const Button = styled((props : Props) => (
  <BaseButton {...props} />
))``

export default Button
