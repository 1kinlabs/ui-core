import { createContext, useContext, ReactNode } from 'react'

type PricingContextProps = {
}

// Create the context with a default value
const PricingContext = createContext<PricingContextProps>({
})

type PricingProviderProps = {
  children: ReactNode;
}

// Create a Provider component
export function PricingProvider({ children }: PricingProviderProps) {
  const value = {
    checkout: () => {
      console.log('checkout')
    },
  }

  return (
    <PricingContext.Provider value={value}>
      {children}
    </PricingContext.Provider>
  )
}

export const usePricing = () => useContext(PricingContext)
