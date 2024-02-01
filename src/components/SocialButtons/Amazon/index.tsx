import styled from 'styled-components'
import Button from '../BaseButton'
import AmazonIcon from './Icon'

type Props = {
  className?: string
}

const loginWithAmazon = () => {
  console.log('login with amazon')
}

const Amazon = styled(({ className }: Props) => (
  <Button className={className} onClick={loginWithAmazon}>
    <AmazonIcon />
  </Button>
))`
  &&& {
    background-color: ${({ theme }) => theme.brand.amazon};
    &:hover {
      background-color: ${({ theme }) => theme.brand.amazon};
    }
  }
`

export default Amazon
