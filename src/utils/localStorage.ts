import { getWindow } from './getWindow'

/**
 * Local Storage helper that safely accesses localStorage.
 * otherwise Next.js will break
 */
export const localStorage = {
  getItem(key: string): string | null {
    return getWindow()?.localStorage?.getItem(key)
  },
  setItem(key: string, value: string): void {
    getWindow()?.localStorage?.setItem(key, value)
  },
  removeItem(key: string): void {
    getWindow()?.localStorage?.removeItem(key)
  },
  clear(): void {
    getWindow()?.localStorage.clear()
  },
}
