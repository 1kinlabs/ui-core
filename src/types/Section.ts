import { AccordionProps } from '@mui/material'
import { ReactElement } from 'react'

export type BaseProps = {
  children: string | ReactElement | ReactElement[],
  className?: string
}

export type NonCollapsibleProps = BaseProps & {
  collapsible?: never,
  defaultExpanded?: never,
  title?: string,
}

export type CollapsibleProps = BaseProps & AccordionProps & {
  collapsible: boolean,
  title: string,
}
