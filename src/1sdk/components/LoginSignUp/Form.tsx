/* eslint-disable react/jsx-props-no-spreading */
import { FormEventHandler } from 'react'
import styled from 'styled-components'

type Props = React.HTMLProps<HTMLFormElement> & {
  className?: string
  onSubmit?: FormEventHandler<HTMLFormElement>
}

const Form = styled(({ className, onSubmit, ...props }: Props) => (
  <form
    className={className}
    onSubmit={(e) => {
      e.preventDefault()
      onSubmit?.(e)
    }}
    {...props}
  />
))`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default Form
