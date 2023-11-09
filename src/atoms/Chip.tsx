import Box from '@mui/material/Box'
import { useTheme, styled } from 'theme'

type EntryType = {
  backgroundColor: string;
  color: string;
  text: string;
}

export enum TypeKey {
  AVAILABLE,
  IN_PROGRESS,
  COMPLETED,
  SOLD_OUT,
  EXPIRED
}

const useTypeInfo = (type : TypeKey) : EntryType => {
  const theme = useTheme()

  const typeMap = {
    [TypeKey.AVAILABLE]: { backgroundColor: theme.text.link, color: theme.surface.body, text: 'Available' },
    [TypeKey.IN_PROGRESS]: { backgroundColor: theme.text.warning, color: theme.surface.body, text: 'In Progress' },
    [TypeKey.COMPLETED]: { backgroundColor: theme.text.success, color: theme.surface.body, text: 'Completed' },
    [TypeKey.SOLD_OUT]: { backgroundColor: theme.text.error, color: theme.text.primary, text: 'Sold Out' },
    [TypeKey.EXPIRED]: { backgroundColor: theme.text.disabled, color: theme.surface.body, text: 'Expired' },
  }

  return typeMap[type]
}

export type Props = {
  type: TypeKey,
  className?: string,
  outline?: boolean
}

const Chip = styled(({ type, className, outline } : Props) => {
  const { backgroundColor, color, text } = useTypeInfo(type)

  return (
    <Box
      sx={{
        backgroundColor: outline ? 'transparent' : backgroundColor,
        color: outline ? backgroundColor : color,
        border: outline ? `1px solid ${backgroundColor}` : '',
      }}
      className={className}
    >
      {text}
    </Box>
  )
})`
  border-radius: 5px;
  font-size: 13px;
  width: fit-content;
  padding: 4px 8px;
  `

export default Chip
