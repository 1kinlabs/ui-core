import styled from 'styled-components'
import { captureException } from '@sentry/nextjs'
import { useAuth } from '1sdk/context/AuthContext'
import Button from '../BaseButton'
import DiscordIcon from './Icon'

type Props = {
  className?: string
}

type MessageEvent = {
  data: {
    accessToken: string
  }
}

const Discord = styled(({ className }: Props) => {
  const { loginByDiscord } = useAuth()

  const handleMessage = (event: MessageEvent) => {
    if (event.data && event.data.accessToken) {
      // not using await here to avoid annoying workarounds for ts/eslint
      loginByDiscord(event.data).catch((error) => {
        console.error('error', error)
        captureException(error)
      })

      window.removeEventListener('message', handleMessage, false)
    }
  }

  const onClick = () => {
    try {
      const redirectUri = `${window.location.origin}/discordcallback`
      window.open(
        `https://discord.com/api/oauth2/authorize?client_id=1054765409657688114&redirect_uri=${redirectUri}&response_type=token&scope=identify`,
        'discordLogin',
        'height=700,width=500',
      )
      window.addEventListener('message', handleMessage, false)
    } catch (error) {
      console.error('error', error)
      captureException(error)
    }
  }

  return (
    <Button className={className} onClick={onClick}>
      <DiscordIcon />
    </Button>
  )
})`
&&& {
  background-color: ${({ theme }) => theme.brand.discord};
  &:hover {
    background-color: ${({ theme }) => theme.brand.discord};
  }
}
`

export default Discord
