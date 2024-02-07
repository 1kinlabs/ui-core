import { Dialog, DialogProps } from '@mui/material'

import LoginSignUp from '1sdk/components/LoginSignUp'

export default function LoginSignUpDialog(props: DialogProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Dialog {...props}>
      <LoginSignUp />
    </Dialog>
  )
}
