import { MouseEvent } from 'react'
import Button from '@mui/material/Button'
import TwitterXIcon from '@mui/icons-material/X'

export type Props = {
  onClick?: (e: MouseEvent) => void
}

export default function TwitterLoginButton({ onClick } : Props) {
  return (
    <Button onClick={onClick} variant="contained" startIcon={<TwitterXIcon fontSize="small" />}>
      {'Link X Account'}
    </Button>
  )
}
