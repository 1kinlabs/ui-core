import { styled } from 'theme'
import { Button, DialogActions } from '@mui/material'

import Dialog, { Props as DialogProps } from './Dialog'
import { OnePassPlans } from './one-pass/OnePassPlans'

export type Props = DialogProps & {
  className?: string,
}

const OnePassDialog = styled(({
  className, open, onClose,
} : Props) => (
  <Dialog className={className} includeBanner open={open} onClose={onClose}>
    <OnePassPlans currentPlan="free" />
    <DialogActions sx={{ placeContent: 'center' }}>
      <Button onClick={onClose}>{'Close'}</Button>
    </DialogActions>
  </Dialog>
))``

export default OnePassDialog
