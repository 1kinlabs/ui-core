/* eslint-disable react/jsx-props-no-spreading */
import BaseButton, { ButtonProps } from '@mui/material/Button'
import Spinner from 'atoms/Spinner'
import { styled } from 'theme'

export type Props = (ButtonProps | (
  Omit<ButtonProps, 'onClick'> & {
    onClick: () => void | Promise<void>
  }
)) & {
  loading?: boolean
}

const Button = styled((props : Props) => {
  const { loading } = props
  const children = loading ? <Spinner noLogo /> : props.children
  return (
    <BaseButton {...props}>
      {children}
    </BaseButton>
  )
})`
  ${Spinner} {
    height: 100%;
    margin: 0;
    padding: 8px;
    .MuiCircularProgress-root {
      margin: 0;
    }
  }
`

export default Button
