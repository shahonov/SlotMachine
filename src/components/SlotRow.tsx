import * as React from 'react';
import styled from 'styled-components';
import { SlotCard } from './SlotCard';
import { WinResult } from './WinResult';
import { Card } from '../models/Card';

const RowWrapper = styled.div`
    width: 150px;

    &.pulse {
        width: 250px;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
        transform: scale(1);
        border-radius: 50px;
        animation: pulse 1s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }
    
        70% {
            transform: scale(1);
            box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
        }
    
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
`;

export interface Results {
    isWin: boolean;
    coefficient: number;
}

export interface Props {
    card1: Card;
    card2: Card;
    card3: Card;
    isWin: boolean;
}

export class SlotRow extends React.Component<Props> {

    public render(): React.ReactNode {
        const { card1, card2, card3, isWin } = this.props;
        const isLoading = card1.isLoading || card2.isLoading || card3.isLoading;
        const isWinRow = !isLoading && isWin;
        return (
            <RowWrapper>
                <SlotCard card={card1} />
                <SlotCard card={card2} />
                <SlotCard card={card3} />
                {isWinRow && <WinResult />}
            </RowWrapper>
        );
    }
}