import React from 'react'
import { captureException, setContext } from '@sentry/nextjs'
import { styled } from 'theme'
import {
  ErrorBoundary as ReactErrorBoundary,
  ErrorBoundaryContextType,
  ErrorBoundaryPropsWithFallback,
  useErrorBoundary,
  FallbackProps,
} from 'react-error-boundary'

const logError = (error: Error, info: React.ErrorInfo) => {
  setContext('Component ErrorInfo', info)

  captureException(
    error instanceof Error ? error : new Error(
      typeof error === 'string' ? error : 'Unknown error',
    ),
  )
}

type defaultFallbackComponentProps = ErrorBoundaryContextType & {
  className?: string
}

const defaultFallbackComponent = styled(({ className }: defaultFallbackComponentProps) => (
  <div className={className}>
    {'An error has occurred! Please try again.'}
  </div>
))`
  display: flex;
  // This hardcoded color is only here in case the theme fails to load
  // it has been blessed for this use case, but don't do this anywhere else.
  color: ${({ theme }) => theme?.text?.error || '#FF4D49'};
`

export function ErrorBoundary({ fallback, children } : ErrorBoundaryPropsWithFallback) {
  return (
    <ReactErrorBoundary
      onError={logError}
      fallback={(fallback || defaultFallbackComponent) as React.ReactElement}
    >
      {children}
    </ReactErrorBoundary>
  )
}

export {
  useErrorBoundary,
  FallbackProps,
}
