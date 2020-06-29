import * as React from 'react';
import styled from 'styled-components';
import cash from '../assets/cash.svg';
import { Icon } from '../styled-components/Icon';

const Coefficient = styled.span`
    padding: 5px;
    font-size: 16px;
    font-weight: 600;
    font-family: monospace;

    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    border-radius: 50px;
    animation: pulse 1s infinite;

    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }

        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
`;

export interface Props {
    
}

export class WinResult extends React.Component<Props> {
    public render(): React.ReactNode {
        return (
            <>
                <Coefficient>2</Coefficient>
                <Icon src={cash} alt={'cash'} />
            </>
        );
    }
}