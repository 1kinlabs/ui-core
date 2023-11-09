import Box from '@mui/material/Box'
import { useTheme, styled } from 'theme'

type EntryType = {
  backgroundColor: string;
  color: string;
  text: string;
}

export enum TypeKey {
  IN_PROGRESS,
  SOLD_OUT
}

const useTypeInfo = (type : TypeKey) : EntryType => {
  const theme = useTheme()

  const typeMap = {
    [TypeKey.IN_PROGRESS]: { backgroundColor: theme.text.warning, color: theme.surface.body, text: 'In Progress' },
    [TypeKey.SOLD_OUT]: { backgroundColor: theme.text.error, color: theme.text.primary, text: 'Sold Out' },
  }

  return typeMap[type]
}

export type Props = {
  type: TypeKey,
  className?: string
}

const Chip = styled(({ type, className } : Props) => {
  const { backgroundColor, color, text } = useTypeInfo(type)

  return (
    <Box
      sx={{
        backgroundColor,
        color,
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
