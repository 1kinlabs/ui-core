/* eslint-disable react/jsx-props-no-spreading */
import BaseCheckbox, { CheckboxProps } from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import styled from 'styled-components'

type Props = Omit<CheckboxProps, 'onChange'> & {
  className?: string
  label: React.ReactNode
  checked: boolean
  onChange: (val: boolean) => void
}

const Checkbox = styled(({
  className, label, checked, onChange, ...props
}: Props) => (
  <FormControlLabel
    className={className}
    label={label}
    control={(
      <BaseCheckbox
        onChange={(evt) => onChange(evt.target.checked)}
        checked={checked}
        {...props}
      />
    )}
  />
))`
  
`

export default Checkbox
