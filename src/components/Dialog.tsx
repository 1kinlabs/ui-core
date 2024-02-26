import { styled } from 'theme'
import Banner from 'atoms/Banner'
import {
  Dialog as DialogBase, Card, CardContent, DialogProps,
} from '@mui/material'

import bannerImage1Kin from '../images/banners/1Kin_banner_compressed.jpg'

export type Props = DialogProps & {
  className?: string,
  includeBanner?: boolean,
  children: React.ReactNode
}

const Dialog = styled(({
  className, includeBanner, open, onClose, children,
} : Props) => (
  <DialogBase className={className} open={open} onClose={onClose}>
    <Card>
      { includeBanner && <Banner src={bannerImage1Kin.src} alt="1Kin banner" /> }
      <CardContent>
        {children}
      </CardContent>
    </Card>
  </DialogBase>
))``

export default Dialog
