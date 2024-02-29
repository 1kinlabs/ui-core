import { useEffect } from 'react'
import { request } from '1sdk/data/request'
import { setBackendBaseUrl, resetBackendBaseUrl } from 'devkin/backendBaseUrlUtils'
import { setFeatureFlagOverride, deleteAllFeatureFlagOverrides, deleteFeatureFlagOverride } from 'flags/utils'

export const useDevkinWindowTools = () => {
  useEffect(() => {
    const defineDevkinWindowObjects = () => {
      if (typeof window === 'undefined') {
        return
      }

      window.devkin = {
        resetBackendBaseUrl,
        setBackendBaseUrl,
        request,
        setFeatureFlagOverride,
        deleteAllFeatureFlagOverrides,
        deleteFeatureFlagOverride,
      }
    }

    defineDevkinWindowObjects()
  }, [])
}
