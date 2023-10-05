import React from 'react'
import { captureException, setContext } from '@sentry/nextjs'
import { styled } from 'theme'

type State = {
  hasError: boolean
}

type Props = React.PropsWithChildren

// This hardcoded color is only here in case the theme fails to load
// it has been blessed for this use case, but don't do this anywhere else.
const ErrorMessage = styled.p`
  color: ${({ theme }) => theme?.text?.error || '#FF4D49'};
`

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    setContext('Component ErrorInfo', info)

    captureException(
      error instanceof Error ? error : new Error(
        typeof error === 'string' ? error : 'Unknown error',
      ),
    )
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return <ErrorMessage>An error has occurred! Please try again.</ErrorMessage>
    }

    return children
  }
}
