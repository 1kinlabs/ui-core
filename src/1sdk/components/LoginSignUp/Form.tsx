/* eslint-disable react/jsx-props-no-spreading */
import { FormEventHandler } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  onSubmit?: FormEventHandler<HTMLFormElement>
  children: React.ReactNode
}

const Form = styled(({ className, onSubmit, children }: Props) => (
  <form
    className={className}
    onSubmit={(e) => {
      e.preventDefault()
      onSubmit?.(e)
    }}
  >
    {children}
  </form>
))`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default Form
