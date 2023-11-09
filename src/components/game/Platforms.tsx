import ItemGrid from 'components/ItemGrid'
import Tooltip from '@mui/material/Tooltip'
import NextImage from 'next/image'
import { Platform } from 'enums/Game'
import AndroidSVG from 'svg/android.svg'
import EpicSVG from 'svg/epic.svg'
import iOSSVG from 'svg/ios.svg'
import MacSVG from 'svg/mac.svg'
import PcSVG from 'svg/pc.svg'
import PlaystationSVG from 'svg/playstation.svg'
import SteamSVG from 'svg/steam.svg'
import WebBrowserSVG from 'svg/browser.svg'
import XboxSVG from 'svg/xbox.svg'

const platformIconMap : Record<Platform, string> = {
  [Platform.ANDROID]: AndroidSVG,
  [Platform.EPIC_GAME_STORE]: EpicSVG,
  [Platform.IOS]: iOSSVG,
  [Platform.MAC]: MacSVG,
  [Platform.PC]: PcSVG,
  [Platform.PLAYSTATION]: PlaystationSVG,
  [Platform.STEAM]: SteamSVG,
  [Platform.WEB_BROWSER]: WebBrowserSVG,
  [Platform.XBOX]: XboxSVG,
}

type Props = {
  platforms: Platform[],
  compact?: boolean
  small?: boolean
}

function Platforms({ platforms, compact, small }: Props) {
  return (
    <ItemGrid compact={compact}>
      {
        platforms.map((platform) => (
          <Tooltip title={platform} placement="top" key={platform}>
            <NextImage
              alt={platform}
              src={platformIconMap[platform]}
              width={small ? 16 : 24}
              height={small ? 16 : 24}
            />
          </Tooltip>
        ))
      }
    </ItemGrid>
  )
}

export default Platforms
