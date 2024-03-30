/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import styled from 'styled-components'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import TextField, { Props } from 'atoms/TextField'

const PasswordField = styled(({ className, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <TextField
      className={className}
      fullWidth
      type={showPassword ? 'text' : 'password'}
      label="Password"
      InputProps={{
        endAdornment: showPassword
          ? <VisibilityOff onClick={() => setShowPassword(false)} />
          : <Visibility onClick={() => setShowPassword(true)} />,
      }}
      {...props}
    />
  )
})``

export default PasswordField
