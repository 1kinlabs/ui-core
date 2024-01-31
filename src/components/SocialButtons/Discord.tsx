import styled from 'styled-components'
import Button from './BaseButton'
import DiscordIcon from './icons/Discord'

type Props = {
  className?: string
}

const loginWithDiscord = () => {
  console.log('login with Discord')
}

const Discord = styled(({ className }: Props) => (
  <Button className={className} onClick={loginWithDiscord}>
    <DiscordIcon />
  </Button>
))`
&&& {
  background-color: ${({ theme }) => theme.brand.discord};
  &:hover {
    background-color: ${({ theme }) => theme.brand.discord};
  }
}
`

export default Discord
