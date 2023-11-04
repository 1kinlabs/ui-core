import ItemGrid from 'components/ItemGrid'
import Image from 'next/image'
import { useState } from 'react'
import { styled } from 'theme'
import MediaSlider from './MediaSlider'

const ImageStyled = styled(Image)`
  cursor: pointer;

  &:focus, &:active {
    animation: none;
      box-shadow: 0 0 0 5px ${({ theme }) => theme.action.selected};
      transition: box-shadow 0.3s ease;
      transform: scale(1.04);
  }
`

export type Props = {
    images: string[]
}

function MediaGallery({ images } : Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <>
      <ItemGrid title="Media Gallery">
        {
          images.map(
            (image, index) => <ImageStyled tabIndex={0} width={200} height={200} src={image} key={image} alt={`Media number ${index}`} onClick={() => setSelectedIndex(index)} />,
          )
        }
      </ItemGrid>
      {
        selectedIndex !== null && (
          <MediaSlider
            open={selectedIndex !== null}
            startIndex={selectedIndex}
            images={images}
            onClose={() => setSelectedIndex(null)}
          />
        )
      }

    </>
  )
}

export default MediaGallery
