import { useEffect, useState, useId } from 'react'
import styled from 'styled-components'
import { Tooltip, Typography, TypographyProps } from '@mui/material'

type Props = {
  className?: string
  children: string
  variant: TypographyProps['variant']
}

type TooltipProps = {
  title: string,
  disableHoverListener: boolean,
  disableFocusListener: boolean
}

const TruncateTooltip = styled(({ className, children, variant }: Props) => {
  const id = useId().replaceAll(':', '')
  const [tooltipProps, setTooltipProps] = useState<TooltipProps>({ title: '', disableHoverListener: true, disableFocusListener: true })
  useEffect(() => {
    const selector = `#${id} #mission-card-name`
    const missionCard = window.document.querySelector(selector)

    if (missionCard && missionCard.scrollWidth > missionCard.clientWidth) {
      setTooltipProps({ title: children, disableHoverListener: false, disableFocusListener: false })
    } else {
      setTooltipProps({ title: '', disableHoverListener: true, disableFocusListener: true })
    }
  }, [children])

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tooltip id={id} className={className} {...tooltipProps}>
      <Typography variant={variant} noWrap className="truncatableText">
        {children}
      </Typography>
    </Tooltip>
  )
})`
  
`

export default TruncateTooltip
