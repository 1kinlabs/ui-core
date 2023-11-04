import { MouseEvent } from 'react'
import { Modal, Box } from '@mui/material'
import { useSettings } from 'materialize/hooks/useSettings'
import styled, { css } from 'styled-components'
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import ChevronRight from 'mdi-material-ui/ChevronRight'
import Close from 'mdi-material-ui/Close'
import IconButton from '@mui/material/IconButton'

import { useKeenSlider } from 'keen-slider/react'
import KeenSliderWrapper from 'materialize/styles/libs/keen-slider'

const GameBox = styled(Box)`
  position: relative;
  borderRadius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px;
  width: 100%;
  height: 100%;
`

const Image = styled('img')`
  width: 80%;
  height: 70%;
  object-fit: contain;
`

const sharedIconStyles = css`
  cursor: pointer;
  font-size: 32px;
  color: ${({ theme }) => theme.text.primary};
  margin: 4px;
`

const ChevronLeftStyled = styled(ChevronLeft)`
  ${sharedIconStyles}
`

const ChevronRightStyled = styled(ChevronRight)`
${sharedIconStyles}
`

const CloseIconStyled = styled(Close)`
${sharedIconStyles}
`

type CloseButtonProps = {
  onClose?: () => void
}

const IconButtonStyled = styled(IconButton)`
  && {
    position: absolute;
    top: 30px;
    right: 50px;
    z-index: 10;
  }
`

function CloseButton({ onClose } : CloseButtonProps) {
  return (
    <IconButtonStyled
      onClick={onClose}
    >
      <CloseIconStyled />
    </IconButtonStyled>
  )
}

export type Props = {
  open: boolean,
  onClose?: () => void,
  images: string[],
  startIndex?: number | null
}

function MediaSlider({
  open, onClose, images, startIndex,
}: Props) {
  const { settings: { direction } } = useSettings()

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: startIndex ?? 0,
      loop: true,
      rtl: direction === 'rtl',
      slides: {
        spacing: 20,
      },
    },
  )

  const onClickBack = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation()
    instanceRef.current?.prev()
  }

  const onClickForward = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation()
    instanceRef.current?.next()
  }

  return (
    <KeenSliderWrapper>
      <Modal open={open} onClose={onClose}>
        <ModalContent>
          <CloseButton onClose={onClose} />
          <ChevronLeftStyled onClick={onClickBack} />
          <Box ref={sliderRef} className="keen-slider">
            {
              images.map((image, index) => (
                <GameBox key={image} className="keen-slider__slide">
                  <Image src={image} alt={`Media Slider image ${index}`} />
                </GameBox>
              ))
            }
          </Box>
          <ChevronRightStyled onClick={onClickForward} />
        </ModalContent>
      </Modal>
    </KeenSliderWrapper>
  )
}

export default MediaSlider
