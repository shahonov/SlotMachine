import * as React from 'react';
import { SlotColumn } from './SlotColumn';
import { Pair } from '../configs';

export interface Props {
    pair1: Pair;
    pair2: Pair;
    pair3: Pair;
}

export class SlotRow extends React.Component<Props> {
    public render(): React.ReactNode {
        const { pair1, pair2, pair3 } = this.props;
        return (
            <div>
                <SlotColumn pair={pair1} />
                <SlotColumn pair={pair2} />
                <SlotColumn pair={pair3} />
            </div>
        );
    }
}