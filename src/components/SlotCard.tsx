import * as React from 'react';
import { Card } from '../models/Card';
import coin from '../assets/coin.svg';
import apple from '../assets/apple.svg';
import banana from '../assets/banana.svg';
import wildcard from '../assets/wildcard.svg';
import pineapple from '../assets/pineapple.svg';
import { IconPulse } from '../styled-components/Icons';

export interface Props {
    card: Card;
}

export class SlotCard extends React.Component<Props> {
    public render(): React.ReactNode {
        const { card } = this.props;
        const src = card.isLoading ? coin : this.getSrc();
        const alt = card.isLoading ? 'coin' : card.type;
        return (
            <IconPulse className={card.isLoading ? 'pulse' : ''} src={src} alt={alt} />
        );
    }

    private getSrc(): string {
        switch (this.props.card.type) {
            case 'apple': return apple;
            case 'banana': return banana;
            case 'pineapple': return pineapple;
            case 'wildcard': return wildcard;
            default: return coin;
        }
    }
}