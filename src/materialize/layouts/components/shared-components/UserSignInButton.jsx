import Button from '@mui/material/Button'
import PersonOutline from '@mui/icons-material/PersonOutline'
import { Dialog } from '@mui/material'
import { useState } from 'react'

import LoginSignUp from '1sdk/components/LoginSignUp'

export default function UserSignInButton() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <>
      <Button variant="outlined" startIcon={<PersonOutline />} onClick={() => setIsLoginModalOpen(true)}>{'Sign in'}</Button>
      <Dialog open={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}>
        <LoginSignUp />
      </Dialog>
    </>
  )
}
