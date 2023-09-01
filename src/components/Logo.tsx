import { Logo as SVGLogo } from 'svg/Logo'

type Props = {
  className?: string
}

export function Logo({ className }: Props) {
  return (
    <div className={className}>
      <SVGLogo />
    </div>
  )
}
