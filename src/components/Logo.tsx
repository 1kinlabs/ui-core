import { styled } from 'theme'
import { Logo as SVGLogo } from 'svg/Logo'
import { TerminalLogo } from 'svg/TerminalLogo'
import { TerminalLogoFlat } from 'svg/TerminalLogoFlat'
import { LogoSmall } from 'svg/LogoSmall'

export enum Logos {
  arena,
  brand,
  brandSmall,
  terminal,
  terminalFlat,
}

type Props = {
  className?: string
  /** @deprecated use type={Logos.small} instead */
  small?: boolean
  type?: Logos
}

export const Logo = styled(({ className, small, type = Logos.terminal }: Props) => {
  if (small) {
    return <LogoSmall className={className} />
  }

  switch (type) {
    case Logos.terminal:
      return <TerminalLogo className={className} />
    case Logos.terminalFlat:
      return <TerminalLogoFlat className={className} />
    case Logos.brand:
      return <SVGLogo className={className} />
    case Logos.brandSmall:
      return <LogoSmall className={className} />
    default:
      return <TerminalLogo className={className} />
  }
})``

export default Logo
