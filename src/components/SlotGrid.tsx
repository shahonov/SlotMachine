import * as React from 'react';
import { Pair } from '../configs';
import { SlotRow } from './SlotRow';

export interface Props {
    pairs: Pair[];
}

export class SlotGrid extends React.Component<Props> {
    public render(): React.ReactNode {
        const { pairs } = this.props;
        return (
            <div>
                <SlotRow pair1={pairs[0]} pair2={pairs[1]} pair3={pairs[2]} />
                <SlotRow pair1={pairs[3]} pair2={pairs[4]} pair3={pairs[5]} />
                <SlotRow pair1={pairs[6]} pair2={pairs[7]} pair3={pairs[8]} />
                <SlotRow pair1={pairs[9]} pair2={pairs[10]} pair3={pairs[11]} />
            </div>
        );
    }
}