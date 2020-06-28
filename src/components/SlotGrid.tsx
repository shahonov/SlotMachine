import * as React from 'react';
import { Pair } from '../cardConfigs';
import { SlotRow } from './SlotRow';

export interface Props {
    pairs: Pair[];
    isLoading: boolean;
}

export class SlotGrid extends React.Component<Props> {
    public render(): React.ReactNode {
        const { pairs, isLoading } = this.props;
        return (
            <div>
                <SlotRow isLoading={isLoading} pair1={pairs[0]} pair2={pairs[1]} pair3={pairs[2]} />
                <SlotRow isLoading={isLoading} pair1={pairs[3]} pair2={pairs[4]} pair3={pairs[5]} />
                <SlotRow isLoading={isLoading} pair1={pairs[6]} pair2={pairs[7]} pair3={pairs[8]} />
                <SlotRow isLoading={isLoading} pair1={pairs[9]} pair2={pairs[10]} pair3={pairs[11]} />
            </div>
        );
    }
}