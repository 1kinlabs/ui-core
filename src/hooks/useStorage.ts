import { useState } from 'react'
<<<<<<< HEAD
=======
import { localStorage } from 'utils/localStorage'
>>>>>>> d496d8f (fix issues preventing ThemeProvider from working)

const keyPrefix = '1kin:'

type Return = [string | null, (newValue: string) => void]

export function useStorage(key: string): Return {
  const effectiveKey = keyPrefix + key

  const [value, setValue] = useState(localStorage.getItem(effectiveKey))
  const set = (newValue: string) => {
    localStorage.setItem(effectiveKey, newValue)
    setValue(newValue)
  }
  return [value, set]
}
