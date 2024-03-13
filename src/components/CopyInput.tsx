import TextField from 'atoms/TextField'
import Button from 'atoms/Button'
import {
  Alert, Snackbar, Tooltip, Typography,
} from '@mui/material'

import styled from 'styled-components'
import { useState } from 'react'

export type Props = {
  className?: string,
  value: string,
  label: string,
  disabled?: boolean
}

const CopyInput = styled(({
  className, value, label, disabled,
} : Props) => {
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const copyValue = async () => {
    if (!value) {
      return
    }

    try {
      await window.navigator.clipboard.writeText(value)
      setOpenSnackbar(true)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={className}>
      <Tooltip title={value} key={value}>
        <TextField compact label={label} value={value} disabled={disabled} />
      </Tooltip>
      <Button variant="contained" disabled={disabled} onClick={copyValue}>{'Copy'}</Button>
      <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="success">
          <Typography variant="body2">
            {'Copied to clipboard.'}
          </Typography>
        </Alert>
      </Snackbar>
    </div>
  )
})`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
`

export default CopyInput
