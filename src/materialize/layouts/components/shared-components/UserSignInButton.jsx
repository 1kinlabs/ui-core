import Button from '@mui/material/Button'
import { PersonOutline } from '@mui/icons-material'
import { Modal, Box } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'

import LoginSignUp from '1sdk/components/LoginSignUp'
import { AuthProvider } from '1sdk/context/AuthContext'

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px;
  max-width: 600px;
  background-color: ${({ theme }) => theme.surface.paper};
  border: '2px solid black';
  border-radius: 8px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

export default function UserSignInButton() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <>
      <Button variant="outlined" startIcon={<PersonOutline />} onClick={() => setIsLoginModalOpen(true)}>{'Sign in'}</Button>
      <Modal
        open={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      >
        <ModalContent>
          <AuthProvider>
            <LoginSignUp />
          </AuthProvider>
        </ModalContent>
      </Modal>
    </>
  )
}
