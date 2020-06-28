import * as React from 'react';
import styled from 'styled-components';
import { Pair, CardType } from '../cardConfigs';
import { SlotCard } from './SlotCard';
import { WinResult } from './WinResult';
import { Credit } from '../creditConfigs';

const RowWrapper = styled.div`
    width: 150px;

    &.pulse {
        width: 250px;
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
            box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
        }
    
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
`;

const coefficients: Map<CardType, number> = new Map();
coefficients.set('apple', 0.4);
coefficients.set('banana', 0.6);
coefficients.set('pineapple', 0.8);

export interface Results {
    isWin: boolean;
    coefficient: number;
}

export interface Props {
    pair1: Pair;
    pair2: Pair;
    pair3: Pair;
    isLoading: boolean;
}

export class SlotRow extends React.Component<Props> {
    public render(): React.ReactNode {
        const { pair1, pair2, pair3, isLoading } = this.props;
        const results = this.results();
        if (results.isWin && !isLoading) {
            // stake * coefficient calculation should NOT happen here
            // it should not be per row, but per whole grid
            console.log(Credit.credit);
            Credit.credit += (Credit.stake * results.coefficient);
            console.log(Credit.credit);
        }
        return (
            <RowWrapper className={results.isWin ? 'pulse' : ''}>
                <SlotCard pair={pair1} />
                <SlotCard pair={pair2} />
                <SlotCard pair={pair3} />
                {results.isWin && <WinResult coefficient={results.coefficient} />}
            </RowWrapper>
        );
    }

    private results(): Results {
        if (this.isCoins) {
            return { isWin: false, coefficient: 0 };
        }

        if (this.isAllWildcards) {
            return { isWin: true, coefficient: 0 };
        }

        if (this.isAllCardsEqual) {
            const multiplier = 3;
            if (this.isApple) {
                //@ts-ignore
                const coef = +(coefficients.get('apple') * multiplier).toFixed(2);
                return { isWin: true, coefficient: coef };
            } else if (this.isBanana) {
                //@ts-ignore
                const coef = +(coefficients.get('banana') * multiplier).toFixed(2);
                return { isWin: true, coefficient: coef };
            } else if (this.isPineapple) {
                //@ts-ignore
                const coef = +(coefficients.get('pineapple') * multiplier).toFixed(2);
                return { isWin: true, coefficient: coef };
            } else {
                return { isWin: true, coefficient: 0 };
            }
        }

        if (this.isMatchWithOneWildcard) {
            const multiplier = 2;
            if (this.isApple) {
                //@ts-ignore
                const coef = +(coefficients.get('apple') * multiplier).toFixed(2);
                return { isWin: true, coefficient: coef };
            } else if (this.isBanana) {
                //@ts-ignore
                const coef = +(coefficients.get('banana') * multiplier).toFixed(2);
                return { isWin: true, coefficient: coef };
            } else if (this.isPineapple) {
                //@ts-ignore
                const coef = +(coefficients.get('pineapple') * multiplier).toFixed(2);
                return { isWin: true, coefficient: coef };
            } else {
                return { isWin: true, coefficient: 0 };
            }
        }

        if (this.isMatchWithTwoWildcards) {
            if (this.isApple) {
                const coef = coefficients.get('apple');
                //@ts-ignore
                return { isWin: true, coefficient: coef };
            } else if (this.isBanana) {
                const coef = coefficients.get('banana');
                //@ts-ignore
                return { isWin: true, coefficient: coef };
            } else if (this.isPineapple) {
                const coef = coefficients.get('pineapple');
                //@ts-ignore
                return { isWin: true, coefficient: coef };
            } else {
                return { isWin: true, coefficient: 0 };
            }
        }

        return { isWin: false, coefficient: 0 };
    }

    private get isApple(): boolean {
        const { pair1, pair2, pair3 } = this.props;
        const isApple1 = pair1.value === 'apple';
        const isApple2 = pair2.value === 'apple';
        const isApple3 = pair3.value === 'apple';
        return isApple1 || isApple2 || isApple3;
    }

    private get isBanana(): boolean {
        const { pair1, pair2, pair3 } = this.props;
        const isBanana1 = pair1.value === 'banana';
        const isBanana2 = pair2.value === 'banana';
        const isBanana3 = pair3.value === 'banana';
        return isBanana1 || isBanana2 || isBanana3;
    }

    private get isPineapple(): boolean {
        const { pair1, pair2, pair3 } = this.props;
        const isPineapple1 = pair1.value === 'pineapple';
        const isPineapple2 = pair2.value === 'pineapple';
        const isPineapple3 = pair3.value === 'pineapple';
        return isPineapple1 || isPineapple2 || isPineapple3;
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