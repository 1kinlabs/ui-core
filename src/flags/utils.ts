/* eslint-disable no-console */
import { FeatureFlags } from 'types/FeatureFlags'

export const getLocalFeatureFlags = () : FeatureFlags => {
  const featureFlagOverrides = window.localStorage.getItem('1kin-feature-flags')

  return featureFlagOverrides
    ? JSON.parse(featureFlagOverrides) as FeatureFlags
    : {}
}

const setLocalFeatureFlags = (newFlags: FeatureFlags) => {
  window.localStorage.setItem('1kin-feature-flags', JSON.stringify(newFlags))
}

export const overrideFeatureFlag = (flagToOverride: string, value: boolean) => {
  const localFlags = getLocalFeatureFlags()

  const updatedFlags = {
    ...localFlags,
    [flagToOverride]: value,
  }

  setLocalFeatureFlags(updatedFlags)
}

export const deleteFeatureFlagOverride = (flagToRemove: string): void => {
  const localFlags = getLocalFeatureFlags()

  const { [flagToRemove]: _, ...updatedFlags } = localFlags

  setLocalFeatureFlags(updatedFlags)
}

export const deleteAllFeatureFlagOverrides = (): void => {
  window.localStorage.removeItem('1kin-feature-flags')
  console.log('\n\nDeleted all feature flag overrides\n\n')
}
