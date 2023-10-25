import { IconSize } from 'enums/IconSize'
import styled from 'styled-components'

export type Props = { className?: string, size?: IconSize }

export const Icon = styled.div<Props>`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 100%;
        height: 100%;
    }
`
