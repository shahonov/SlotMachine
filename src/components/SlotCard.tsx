import * as React from 'react';
import coin from '../assets/coin.svg';
import apple from '../assets/apple.svg';
import banana from '../assets/banana.svg';
import wildcard from '../assets/wildcard.svg';
import pineapple from '../assets/pineapple.svg';
import { Icon } from '../styled-components/Icon';
import { Card } from '../models/Card';

export interface Props {
    card: Card;
}

export class SlotCard extends React.Component<Props> {
    public render(): React.ReactNode {
        const { card } = this.props;
        const src = card.isLoading ? coin : this.getSrc();
        const alt = card.isLoading ? 'coin' : card.type;
        return (
            <Icon className={card.isLoading ? 'pulse' : ''} src={src} alt={alt} />
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