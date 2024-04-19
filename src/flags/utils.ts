/* eslint-disable no-console */
import { FeatureFlags } from 'types/FeatureFlags'

export const FEATURE_FLAG_STORAGE_KEY = '1kin-feature-flags'

export const hasFeatureFlagOverrides = () : boolean => {
  const localFlags = getFeatureFlagOverrides()

  return Object.keys(localFlags).length !== 0
}

export const getFeatureFlagOverrides = () : FeatureFlags => {
  const featureFlagOverrides = window?.localStorage?.getItem(FEATURE_FLAG_STORAGE_KEY)

  return featureFlagOverrides
    ? JSON.parse(featureFlagOverrides) as FeatureFlags
    : {}
}

export const getStringifiedFeatureFlagOverrides = () : string | null => window?.localStorage
  .getItem(FEATURE_FLAG_STORAGE_KEY)

const setFeatureFlagOverrides = (newFlags: FeatureFlags) => {
  window?.localStorage.setItem(FEATURE_FLAG_STORAGE_KEY, JSON.stringify(newFlags))
}

export const setFeatureFlagOverride = (flagToOverride: string, value: boolean) => {
  const localFlags = getFeatureFlagOverrides()

  const updatedFlags = {
    ...localFlags,
    [flagToOverride]: value,
  }

  setFeatureFlagOverrides(updatedFlags)
}

export const deleteFeatureFlagOverride = (flagToRemove: string): void => {
  const localFlags = getFeatureFlagOverrides()

  const { [flagToRemove]: _, ...updatedFlags } = localFlags

  setFeatureFlagOverrides(updatedFlags)
}

export const deleteAllFeatureFlagOverrides = (): void => {
  window?.localStorage.removeItem(FEATURE_FLAG_STORAGE_KEY)
  console.log('\n\nDeleted all feature flag overrides\n\n')
}
