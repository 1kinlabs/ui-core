import { styled } from 'theme'
import { DialogProps } from '@mui/material'

import Dialog from './Dialog'

export type Props = DialogProps & {
  className?: string,
}

const OnePassDialog = styled(({
  className, open, onClose,
} : Props) => (
  <Dialog className={className} includeBanner open={open} onClose={onClose}>
    {'PUT 1PASS PURCHASE CONTENT HERE'}
  </Dialog>
))``

export default OnePassDialog
