/* eslint-disable react/jsx-props-no-spreading */
import Check from '@mui/icons-material/Check'
import {
  List, ListItem, ListItemIcon, ListItemProps, ListItemText, ListProps,
} from '@mui/material'
import { styled } from 'theme'

export const PricingCardList = styled(({ children, ...props }: ListProps) => (
  <List dense {...props}>{children}</List>
))`
  width: 100%;
`
export const PricingCardListItem = styled(({
  className, children, ...props
}: ListItemProps) => (
  <ListItem className={className} {...props}>
    <ListItemIcon>
      <Check />
    </ListItemIcon>
    <ListItemText primary={children} />
  </ListItem>
))`
  && {
    padding: 0;
  }
`
