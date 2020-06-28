import * as React from 'react';
import styled from 'styled-components';
import { Pair } from '../configs';
import { SlotCard } from './SlotCard';

const RowWrapper = styled.div`
    &.win-row {
        background-color: lightgreen;
    }
`;

export interface Results {
    isWin: boolean;
    coefficient: number;
}

export interface Props {
    pair1: Pair;
    pair2: Pair;
    pair3: Pair;
}

export class SlotRow extends React.Component<Props> {
    public render(): React.ReactNode {
        const { pair1, pair2, pair3 } = this.props;
        const results = this.results();
        if (results.isWin) {
            pair1.isWin = true;
            pair2.isWin = true;
            pair3.isWin = true;
        }
        return (
            <RowWrapper className={results.isWin ? 'win-row' : ''}>
                <SlotCard pair={pair1} />
                <SlotCard pair={pair2} />
                <SlotCard pair={pair3} />
            </RowWrapper>
        );
    }

    private results(): Results {
        if (this.isCoins) {
            return { isWin: false, coefficient: 0 };
        }

        if (this.isAllWildcards) {
            // RETURN 0 COEFFICIENT
            return { isWin: true, coefficient: 0 };
        }

        if (this.isAllCardsEqual) {
            // CHECK TYPE OF CARDS AND RETURN COEFFICIENT X3
            return { isWin: true, coefficient: 0 };
        }

        if (this.isMatchWithOneWildcard) {
            // CHECK TYPE OF CARDS AND RETURN COEFFICIENT X2
            return { isWin: true, coefficient: 0 };
        }

        if (this.isMatchWithTwoWildcards) {
            // CHECK TYPE OF CARDS AND RETURN COEFFICIENT X1
            return { isWin: true, coefficient: 0 };
        }

        return { isWin: false, coefficient: 0 };
    }

    private get isCoins(): boolean {
        const { pair1, pair2, pair3 } = this.props;
        return pair1.value === 'coin' || pair2.value === 'coin' || pair3.value === 'coin';
    }

    private get isAllCardsEqual(): boolean {
        const { pair1, pair2, pair3 } = this.props;
        return pair1.value === pair2.value && pair1.value === pair3.value
    }

    private get isMatchWithOneWildcard(): boolean {
        const { pair1, pair2, pair3 } = this.props;
        const isFirstCardWildcard = pair2.value === pair3.value && pair1.value === 'wildcard';
        const isSecondCardWildcard = pair1.value === pair3.value && pair2.value === 'wildcard';
        const isThirdCardWildcard = pair1.value === pair2.value && pair3.value === 'wildcard';
        return isFirstCardWildcard || isSecondCardWildcard || isThirdCardWildcard;
    }

    private get isMatchWithTwoWildcards(): boolean {
        const { pair1, pair2, pair3 } = this.props;
        const isFirstSecondCardWildcard = pair1.value === 'wildcard' && pair2.value === 'wildcard';
        const isSecondThirdCardWildcard = pair2.value === 'wildcard' && pair3.value === 'wildcard';
        const isFirstThirdCardWildcard = pair1.value === 'wildcard' && pair3.value === 'wildcard';
        return isFirstSecondCardWildcard || isSecondThirdCardWildcard || isFirstThirdCardWildcard;
    }

    private get isAllWildcards(): boolean {
        const { pair1, pair2, pair3 } = this.props;
        return pair1.value === 'wildcard' && pair2.value === 'wildcard' && pair3.value === 'wildcard';
    }
}