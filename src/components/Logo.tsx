import { styled } from 'theme'
import { Logo as SVGLogo } from 'svg/Logo'
import { ArenaLogo } from 'svg/ArenaLogo'
import { ArenaLogoFlat } from 'svg/ArenaLogoFlat'
import { TerminalLogo } from 'svg/TerminalLogo'
import { TerminalLogoFlat } from 'svg/TerminalLogoFlat'
import { LogoSmall } from 'svg/LogoSmall'

export enum Logos {
  arena,
  arenaFlat,
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
    case Logos.arena:
      return <ArenaLogo className={className} />
    case Logos.arenaFlat:
      return <ArenaLogoFlat className={className} />
    case Logos.brand:
      return <SVGLogo className={className} />
    case Logos.brandSmall:
      return <LogoSmall className={className} />
    case Logos.terminal:
      return <TerminalLogo className={className} />
    case Logos.terminalFlat:
      return <TerminalLogoFlat className={className} />
    default:
      return <TerminalLogo className={className} />
  }
})``

export default Logo
