import * as React from 'react';
import styled from 'styled-components';
import { Pair } from '../configs';
import coin from '../assets/coin.svg';
import apple from '../assets/apple.svg';
import banana from '../assets/banana.svg';
import wildcard from '../assets/wildcard.svg';
import pineapple from '../assets/pineapple.svg';

const Image = styled.img`
    width: 50px;

    &.win-card {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
        transform: scale(1);
        border-radius: 50px;
        animation: pulse 1s infinite;
    }

    &.pulse {
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
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }
    
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
`;

export interface Props {
    pair: Pair;
}

export class SlotCard extends React.Component<Props> {
    public render(): React.ReactNode {
        const { pair } = this.props;
        const src = pair.isLoading ? coin : this.getSrc();
        const alt = pair.isLoading ? 'coin' : pair.value;
        return (
            <Image className={pair.isLoading ? 'pulse' : pair.isWin ? 'win-card' : ''} src={src} alt={alt} />
        );
    }

    private getSrc(): string {
        switch (this.props.pair.value) {
            case 'apple': return apple;
            case 'banana': return banana;
            case 'pineapple': return pineapple;
            case 'wildcard': return wildcard;
            default: return coin;
        }
    }
}