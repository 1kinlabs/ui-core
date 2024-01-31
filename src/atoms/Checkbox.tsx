import { Checkbox as BaseCheckbox, FormControlLabel } from '@mui/material'

import styled from 'styled-components'

type Props = {
  className?: string
  label: React.ReactNode
  checked: boolean
  onChange: (val: boolean) => void
}

const Checkbox = styled(({
  className, label, checked, onChange,
}: Props) => (
  <FormControlLabel
    className={className}
    label={label}
    control={(
      <BaseCheckbox
        onChange={(evt) => onChange(evt.target.checked)}
        checked={checked}
      />
    )}
  />
))`
  
`

export default Checkbox
