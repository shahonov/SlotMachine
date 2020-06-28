import * as React from 'react';
import styled from 'styled-components';
import { Pair } from '../configs';
import { SlotColumn } from './SlotColumn';

const RowWrapper = styled.div`
    &.win-row {
        background-color: lightgreen;
    }
`;

export interface Props {
    pair1: Pair;
    pair2: Pair;
    pair3: Pair;
}

export class SlotRow extends React.Component<Props> {
    public render(): React.ReactNode {
        const { pair1, pair2, pair3 } = this.props;
        return (
            <RowWrapper className={this.isWinRow ? 'win-row' : ''}>
                <SlotColumn pair={pair1} />
                <SlotColumn pair={pair2} />
                <SlotColumn pair={pair3} />
            </RowWrapper>
        );
    }

    private get isWinRow(): boolean {
        const { pair1, pair2, pair3 } = this.props;
        if (pair1.value === 'coin') {
            return false;
        }
        return pair1.value === pair2.value && pair1.value === pair3.value;
    }
}