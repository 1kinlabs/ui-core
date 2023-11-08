import TextField from 'atoms/TextField'
import {
  Alert, Button, Snackbar, Typography,
} from '@mui/material'

import styled from 'styled-components'
import { useState } from 'react'

type Props = {
    className?: string,
    code?: string,
}

const ClaimCode = styled(({ className, code = '' } : Props) => {
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const copyCode = () => {
    if (!code) {
      return
    }

    window.navigator.clipboard.writeText(code).catch(console.error)
    setOpenSnackbar(true)
  }

  return (
    <div className={className}>
      <TextField compact label="Redemption Code" value={code || '######'} />
      <Button variant="contained" disabled={!code} onClick={copyCode}>{'Copy Code'}</Button>
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
    gap: 8px;
`

export default ClaimCode
