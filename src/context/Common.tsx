import { FlagProvider } from 'flags'
import { ThemeProvider } from 'theme'
import { DataProvider } from 'context/Data'

// A common context provider that wraps all app-critical providers
export function CommonProvider({ children }: React.PropsWithChildren) {
  return (
    <DataProvider>
      <FlagProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </FlagProvider>
    </DataProvider>
  )
}
