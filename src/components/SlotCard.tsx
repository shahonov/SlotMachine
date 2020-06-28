import * as React from 'react';
import { Pair } from '../cardConfigs';
import coin from '../assets/coin.svg';
import apple from '../assets/apple.svg';
import banana from '../assets/banana.svg';
import wildcard from '../assets/wildcard.svg';
import pineapple from '../assets/pineapple.svg';
import { Icon } from '../styled-components/Icon';

export interface Props {
    pair: Pair;
}

export class SlotCard extends React.Component<Props> {
    public render(): React.ReactNode {
        const { pair } = this.props;
        const src = pair.isLoading ? coin : this.getSrc();
        const alt = pair.isLoading ? 'coin' : pair.value;
        return (
            <Icon className={pair.isLoading ? 'pulse' : ''} src={src} alt={alt} />
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