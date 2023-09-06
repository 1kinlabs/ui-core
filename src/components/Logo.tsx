import { Logo as SVGLogo } from 'svg/Logo'
import { LogoSmall } from 'svg/LogoSmall'

type Props = {
  className?: string
  small?: boolean
}

export function Logo({ className, small }: Props) {
  if (small) {
    return <LogoSmall className={className} />
  }

  return <SVGLogo className={className} />
}
