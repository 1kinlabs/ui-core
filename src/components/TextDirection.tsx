// ** React Imports
import { useEffect } from 'react'

// ** Emotion Imports
import createCache, { StylisPlugin } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

// ** RTL Plugin
import stylisRTLPlugin from 'stylis-plugin-rtl'

const styleCache = () => createCache({
  key: 'rtl',
  prepend: true,
  stylisPlugins: [stylisRTLPlugin as unknown as StylisPlugin],
})

type Props = {
  direction: string
  children: React.ReactNode
}

export function TextDirection(props: Props) {
  const { children, direction } = props
  useEffect(() => {
    document.dir = direction
  }, [direction])
  if (direction === 'rtl') {
    return <CacheProvider value={styleCache()}>{children}</CacheProvider>
  }

  return <>{children}</>
}
