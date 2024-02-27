import { styled } from 'theme'
import { Button, DialogActions } from '@mui/material'
import Dialog, { Props as DialogProps } from './Dialog'
import { OnePassPlans } from './one-pass/OnePassPlans'

const OnePassDialogActions = styled(DialogActions)`
  place-content: center;
`

export type Props = DialogProps & {
  className?: string,
}

const OnePassDialog = styled(({
  className, open, onClose,
} : Props) => (
  <Dialog className={className} includeBanner open={open} onClose={onClose}>
    <OnePassPlans currentPlan="free" />
    <OnePassDialogActions>
      <Button onClick={onClose}>{'Close'}</Button>
    </OnePassDialogActions>
  </Dialog>
))``

export default OnePassDialog
