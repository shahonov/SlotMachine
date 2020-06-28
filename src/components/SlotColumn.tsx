import * as React from 'react';
import styled from 'styled-components';
import coin from '../assets/coin.svg';
import apple from '../assets/apple.svg';
import banana from '../assets/banana.svg';
import wildcard from '../assets/wildcard.svg';
import pineapple from '../assets/pineapple.svg';

const images: string[] = [apple, banana, wildcard, pineapple];
const alts: string[] = ['apple', 'banana', 'wildcard', 'pineapple'];

const Image = styled.img`
    width: 50px;
    &.pulse {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
        transform: scale(1);
        border-radius: 50px;
        animation: pulse 2s infinite;
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
    isLoading: boolean;
}

export class SlotColumn extends React.Component<Props> {
    public render(): React.ReactNode {
        const { isLoading } = this.props;
        const index = this.randomNum(images.length);
        const src = isLoading ? coin : images[index];
        const alt = isLoading ? 'coin' : alts[index];
        return (
            <Image className={isLoading ? 'pulse' : ''} src={src} alt={alt} />
        );
    }

    private randomNum(max: number): number {
        const rnd = Math.floor(Math.random() * max);
        return rnd;
    }
}