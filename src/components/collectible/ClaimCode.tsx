import TextField from 'atoms/TextField'
import { Button } from 'atoms/Button'
import {
  Alert, Snackbar, Typography, useMediaQuery,
} from '@mui/material'
import { mobileSmall } from 'css/media'

import styled from 'styled-components'
import { useState } from 'react'

export type Props = {
  className?: string,
  code?: string,
}

const ClaimCode = styled(({ className, code } : Props) => {
  const mobile = useMediaQuery(mobileSmall)

  const [openSnackbar, setOpenSnackbar] = useState(false)

  const copyCode = async () => {
    if (!code) {
      return
    }

    try {
      await window.navigator.clipboard.writeText(code)
      setOpenSnackbar(true)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={className}>
      <TextField compact label="Redemption Code" value={code || '######'} />
      <Button variant="contained" disabled={!code} onClick={copyCode}>{mobile ? 'Copy' : 'Copy Code'}</Button>
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

export default ClaimCode
