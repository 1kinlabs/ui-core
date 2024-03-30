import { styled } from 'theme'
import { useDevkinWindowTools } from 'hooks/useDevkinWindowTools'
import Code from '@mui/icons-material/Code'
import Flag from '@mui/icons-material/Flag'
import { hasFeatureFlagOverrides, deleteAllFeatureFlagOverrides, getFeatureFlagOverrides } from 'flags/utils'
import { Tooltip } from '@mui/material'
import { getBackendBaseUrlOverride, hasBackendBaseUrlOverride, resetBackendBaseUrl } from './backendBaseUrlUtils'

export type Props = {
  className?: string
}

const NotchedBox = styled.div``
const ItemsContainer = styled.div``

const DevkinToolsOverlay = styled(({ className } : Props) => {
  const shouldDisplayToolsOverlay = hasBackendBaseUrlOverride() || hasFeatureFlagOverrides()

  const getFeatureFlagOverridesTooltipText = () => {
    const featureFlagOverrides = getFeatureFlagOverrides()

    return Object.entries(featureFlagOverrides).map(([key, value]) => (`${key}: ${value}`)).join(', ')
  }

  const onOverlayToolsClick = (message: string, onConfirm: () => void) : void => {
    // eslint-disable-next-line no-alert
    const shouldInvokeOnConfirm = window.confirm(`${message}. Note: this will refresh your page.`)

    if (shouldInvokeOnConfirm) {
      onConfirm()
      window.location.reload()
    }
  }

  return shouldDisplayToolsOverlay ? (
    <div className={className}>
      <NotchedBox />
      <ItemsContainer>
        {
          hasBackendBaseUrlOverride() && (
            <Tooltip title={`BACKEND_BASE_URL override: ${getBackendBaseUrlOverride()}`} key={getBackendBaseUrlOverride()}>
              <Code onClick={() => onOverlayToolsClick('Do you want to reset the BACKEND_BASE_URL?', resetBackendBaseUrl)} />
            </Tooltip>
          )
        }
        {
          hasFeatureFlagOverrides() && (
            <Tooltip title={`Feature Flag overrides:\n   ${getFeatureFlagOverridesTooltipText()}`} key={getFeatureFlagOverridesTooltipText()}>
              <Flag onClick={() => onOverlayToolsClick('Do you want to reset all feature flag overrides?', deleteAllFeatureFlagOverrides)} />
            </Tooltip>
          )
        }
      </ItemsContainer>
    </div>
  ) : null
})`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  z-index: 9001; // IT'S OVER 9000!!!!!

  ${NotchedBox} {
    width: 30px;
    background: linear-gradient(to bottom right, transparent 50%, ${({ theme }) => theme.text.error} 50%) right,
    linear-gradient(to top right, transparent 50%, ${({ theme }) => theme.text.error} 50%) right;
  }

  ${ItemsContainer} {
    background-color: ${({ theme }) => theme.text.error};
    display: flex;
    gap: 8px;
    padding: 4px 8px;
    cursor: pointer;
  }
`

export default DevkinToolsOverlay

export {
  useDevkinWindowTools,
}
