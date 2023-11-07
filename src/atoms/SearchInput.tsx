import TextField from '@mui/material/TextField'
import { styled } from 'theme'
import { Search } from 'icons/Search'
import { spacing } from 'css/spacing'

type Props = {
  className?: string
}

export const SearchInput = styled(({ className }: Props) => (
  <TextField
    className={className}
    variant="outlined"
    InputProps={{
      startAdornment: <Search />,
    }}
  />
))`
  input {
    padding-left: ${spacing[2]};
  }
`
