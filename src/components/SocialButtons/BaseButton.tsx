import styled from 'styled-components'
import Button from 'atoms/Button'

const BaseButton = styled(Button)`
  &&& {
    width: 80px;
    height: 38px;
    border-radius: 5px;
    color: ${({ theme }) => theme.button.text};
    &:hover {
      filter: brightness(0.7);
    }
  }
`

export default BaseButton
