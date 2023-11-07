import TextField from '@mui/material/TextField'
import { styled } from 'theme'
import { Search } from 'icons/Search'

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
    padding-left: 8px;
  }
`
