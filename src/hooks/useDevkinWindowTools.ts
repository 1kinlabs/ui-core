/* eslint-disable no-console */
import { useEffect } from 'react'
import { request, BACKEND_BASE_URL } from '1sdk/data/request'
import { Env } from 'enums/Env'
import { overrideFeatureFlag, deleteAllFeatureFlagOverrides, deleteFeatureFlagOverride } from 'flags/utils'

const resetBackendBaseUrl = () => {
  window.localStorage.removeItem('BACKEND_BASE_URL')
  console.log(`\n\n Resetting BACKEND_BASE_URL to default (${BACKEND_BASE_URL}). \n\n`)
}

const setBackendBaseUrl = (env : Env) => {
  const localUrl = 'http://127.0.0.1:1337'
  const stageUrl = 'https://api-staging.1kin.io'
  const prodUrl = 'https://api.1kin.io'

  const baseUrlMap = {
    localhost: localUrl,
    staging: stageUrl,
    production: prodUrl,
  }

  if (baseUrlMap[env]) {
    console.log(`\n\nSetting BACKEND_BASE_URL to ${baseUrlMap[env]}\n\n`)
    window.localStorage.setItem('BACKEND_BASE_URL', baseUrlMap[env])
  } else {
    window.devkin.resetBackendBaseUrl()
    console.warn(`\n\n Could no find env ${env}. Resetting BACKEND_BASE_URL to default (${BACKEND_BASE_URL}). \n\n`)
  }
}

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
        overrideFeatureFlag,
        deleteAllFeatureFlagOverrides,
        deleteFeatureFlagOverride,
      }
    }

    defineDevkinWindowObjects()
  }, [])
}
