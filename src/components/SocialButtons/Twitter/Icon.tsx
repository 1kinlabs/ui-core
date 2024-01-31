import styled from 'styled-components'

type Props = {
  className?: string
}

const TwitterIcon = styled(({ className }: Props) => (
  <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4523 10.4686L21.9016 2H20.1363L13.6681 9.3532L8.50198 2H2.54346L10.3557 13.1193L2.54346 22H4.3088L11.1394 14.2348L16.5952 22H22.5537L14.4519 10.4686H14.4523ZM12.0344 13.2173L11.2429 12.1101L4.94487 3.29968H7.65633L12.7389 10.4099L13.5304 11.5172L20.1372 20.7594H17.4257L12.0344 13.2177V13.2173Z" fill="currentColor" />
  </svg>
))``

export default TwitterIcon
