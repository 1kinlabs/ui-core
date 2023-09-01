import { useEffect, DependencyList } from 'react'

export const usePromise = (effect: () => Promise<void>, deps: DependencyList): void => {
  useEffect(() => {
    (async () => effect())()
  }, deps)
}
