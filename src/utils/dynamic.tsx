import { ComponentType, lazy, Suspense } from 'react'
import Spinner from 'materialize/components/spinner'

export function dynamic<T extends ComponentType<any>>(importFunc: () => Promise<{ default: T }>) {
  const Component = lazy(importFunc)

  return (props: any) => (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  )
}

