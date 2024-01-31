import styled from 'styled-components'
import Button from 'atoms/Button'
import { mobileSmall } from 'css/media'

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.surface.paperLight};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  height: 52px;
  align-self: center;

  ${mobileSmall} {
    flex-direction: column;
  }

  ${Button} {
    padding: 0 2px;
  }
`

export default Footer
