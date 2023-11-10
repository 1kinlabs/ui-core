import styled from 'styled-components'
import { Collectible } from 'types/Collectible'
import Image from 'next/image'
import { mobile } from 'css/media'

type Props = {
  className?: string
  collectible: Collectible
}

const CollectibleImage = styled(({ className, collectible }: Props) => (
  <Image width="1024" height="720" className={className} src={collectible?.assets?.heroMedia?.defaultMedia?.src1x || ''} alt={collectible?.title || ''} />
))`
  width: 100%;
  max-height: 480px;
  object-fit: cover;
  border-radius: 8px;
  ${mobile} {
    height: auto;
  }
`

export default CollectibleImage
