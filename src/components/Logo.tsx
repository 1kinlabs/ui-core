import { styled } from 'theme'
import { Logo as SVGLogo } from 'svg/Logo'
import { LogoSmall } from 'svg/LogoSmall'

type Props = {
  className?: string
  small?: boolean
}

export const Logo = styled(({ className, small }: Props) => {
  if (small) {
    return <LogoSmall className={className} />
  }

  return <SVGLogo className={className} />
})``

export default Logo
