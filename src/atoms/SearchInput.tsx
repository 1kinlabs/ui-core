import TextField, { Props as TextFieldProps } from 'atoms/TextField'
import { styled } from 'theme'
import { Search } from 'icons/Search'
import { IconSize } from 'enums/IconSize'

type Props = TextFieldProps & {
  className?: string,
  label?: string
}

export const SearchInput = styled(({ className, label, compact }: Props) => (
  <TextField
    compact={compact}
    placeholder="Search"
    label={label}
    className={className}
    variant="outlined"
    InputProps={{
      startAdornment: <Search size={IconSize.S} />,
    }}
  />
))`
  input {
    padding-left: 8px;
  }
`
