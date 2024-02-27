import { styled } from 'theme'
import { DialogProps } from '@mui/material'

import Dialog from './Dialog'
import { OnePassPlans } from './one-pass/OnePassPlans'

export type Props = DialogProps & {
  className?: string,
}

const OnePassDialog = styled(({
  className, open, onClose,
} : Props) => (
  <Dialog className={className} includeBanner open={open} onClose={onClose}>
    <OnePassPlans currentPlan="free" />
  </Dialog>
))``

export default OnePassDialog
