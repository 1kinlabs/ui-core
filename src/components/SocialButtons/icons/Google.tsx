import styled from 'styled-components'

type Props = {
  className?: string
}

const GoogleIcon = styled(({ className }: Props) => (
  <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.6 11.5833H12.9583V13.8583H18.3833C18.1083 17.0333 15.4667 18.3917 12.9667 18.3917C9.775 18.3917 6.975 15.875 6.975 12.3333C6.975 8.91667 9.64167 6.275 12.975 6.275C15.55 6.275 17.0583 7.91667 17.0583 7.91667L18.6417 6.26667C18.6417 6.26667 16.6083 4 12.8917 4C8.15833 4 4.5 8 4.5 12.3333C4.5 16.5417 7.94167 20.6667 13.0167 20.6667C17.475 20.6667 20.725 17.6083 20.725 13.0917C20.725 12.1333 20.6 11.5833 20.6 11.5833Z" fill="currentColor" />
  </svg>
))``

export default GoogleIcon
