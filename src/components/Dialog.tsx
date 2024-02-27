import { styled } from 'theme'
import Banner from 'atoms/Banner'
import {
  Dialog as DialogBase, Card, CardContent, DialogProps,
} from '@mui/material'

import bannerImage1Kin from '../images/banners/1Kin_banner_compressed.jpg'

export type Props = Omit<DialogProps, 'onClose'> & {
  className?: string,
  includeBanner?: boolean,
  children: React.ReactNode
  onClose: () => void
}

const DialogCard = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
`

const DialogCardContent = styled(CardContent)`
  overflow-y: auto;
`

const Dialog = styled(({
  className, includeBanner, open, onClose, children,
} : Props) => (
  <DialogBase PaperProps={{ sx: { maxWidth: 'unset' } }} className={className} open={open} onClose={() => onClose?.()} sx={{ containerType: 'inline-size' }}>
    <DialogCard>
      { includeBanner && <Banner src={bannerImage1Kin.src} alt="1Kin banner" /> }
      <DialogCardContent>
        {children}
      </DialogCardContent>
    </DialogCard>
  </DialogBase>
))`

`

export default Dialog
