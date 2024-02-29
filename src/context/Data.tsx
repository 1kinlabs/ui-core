import { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a Provider component
export function DataProvider({ children }: React.PropsWithChildren) {
  const queryClient = useMemo(() => new QueryClient(), [])
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
