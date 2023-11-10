import { ReactElement, cloneElement } from 'react'
import ItemGrid from 'components/ItemGrid'
import Tooltip from '@mui/material/Tooltip'
import { Platform } from 'enums/Game'
import {
  Android, Epic, IOS, Mac, PC, Playstation, Steam, Web, Xbox,
} from 'icons/Platforms'
import { IconSize } from 'enums/IconSize'

const platformIconMap: Record<Platform, ReactElement> = {
  [Platform.ANDROID]: <Android />,
  [Platform.EPIC_GAME_STORE]: <Epic />,
  [Platform.IOS]: <IOS />,
  [Platform.MAC]: <Mac />,
  [Platform.PC]: <PC />,
  [Platform.PLAYSTATION]: <Playstation />,
  [Platform.STEAM]: <Steam />,
  [Platform.WEB_BROWSER]: <Web />,
  [Platform.XBOX]: <Xbox />,
}

interface Props {
  platforms: Platform[];
  compact?: boolean;
  small?: boolean;
}

function Platforms({ platforms, compact, small } : Props) {
  const iconSize = small ? IconSize.XS : IconSize.S

  return (
    <ItemGrid compact={compact}>
      {platforms.map((platform) => (
        <Tooltip title={platform} placement="top" key={platform}>
          {cloneElement(platformIconMap[platform], { size: iconSize })}
        </Tooltip>
      ))}
    </ItemGrid>
  )
}

export default Platforms
