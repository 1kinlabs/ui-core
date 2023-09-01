import { useState } from 'react'
import { localStorage } from 'utils/localStorage'

const keyPrefix = '1kin:'

type Return<T extends string> = [T | null, (newValue: T) => void]

export function useStorage<T extends string>(key: string, defaultValue: T): Return<T> {
  const effectiveKey = keyPrefix + key

  const initialValue = localStorage.getItem(effectiveKey) as T || defaultValue
  const [value, setValue] = useState<T>(initialValue)
  const set = (newValue: T) => {
    localStorage.setItem(effectiveKey, newValue)
    setValue(newValue)
  }
  return [value, set]
}
