import { styled } from 'theme'

export type Props = {
  className?: string,
  src: string,
  alt: string
}

const Banner = styled(({ className, src, alt } : Props) => (
  <img className={className} src={src} alt={alt} />
))`
  width: 100%;
  height: 128px;
  object-fit: cover;
`

export default Banner
