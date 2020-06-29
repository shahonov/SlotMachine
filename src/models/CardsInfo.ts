import { Card } from "./Card";

export class CardsInfo {

    constructor(cards: Card[]) {
        if (cards.length < 12) {
            throw new Error('CardsInfo: Cards length cannot be less than 12');
        }
        this.cards = cards;
    }

    public cards: Card[];

    public get row1Coefficient(): number {
        const card1 = this.cards[0];
        const card2 = this.cards[1];
        const card3 = this.cards[2];
        const coefficient = this.getCoefficient(card1, card2, card3);
        return coefficient;
    }

    public get row2Coefficient(): number {
        const card1 = this.cards[3];
        const card2 = this.cards[4];
        const card3 = this.cards[5];
        const coefficient = this.getCoefficient(card1, card2, card3);
        return coefficient;
    }

    public get row3Coefficient(): number {
        const card1 = this.cards[6];
        const card2 = this.cards[7];
        const card3 = this.cards[8];
        const coefficient = this.getCoefficient(card1, card2, card3);
        return coefficient;
    }

    public get row4Coefficient(): number {
        const card1 = this.cards[9];
        const card2 = this.cards[10];
        const card3 = this.cards[11];
        const coefficient = this.getCoefficient(card1, card2, card3);
        return coefficient;
    }

    public getCoefficient(card1: Card, card2: Card, card3: Card): number {
        if (this.isAllWildcards(card1, card2, card3)) {
            return 0;
        }

        if (this.isAllEqual(card1, card2, card3)) {
            const coef = card1.coefficient + card2.coefficient + card3.coefficient;
            return coef;
        }

        if (this.isEqualWithOneWildcard(card1, card2, card3)) {
            if (card1.isWildcard) {
                const coef = card2.coefficient + card3.coefficient;
                return coef;
            } else if (card2.isWildcard) {
                const coef = card1.coefficient + card3.coefficient;
                return coef;
            } else {
                const coef = card1.coefficient + card2.coefficient;
                return coef;
            }
        }

        if (this.isEqualWithTwoWildcards(card1, card2, card3)) {
            if (card1.isWildcard && card2.isWildcard) {
                return card3.coefficient;
            } else if (card2.isWildcard && card3.isWildcard) {
                return card1.coefficient;
            } else {
                return card2.coefficient;
            }
        }

        return 0;
    }

    private isAllWildcards(card1: Card, card2: Card, card3: Card): boolean {
        const isWildcards = (
            card1.isWildcard && card2.isWildcard && card3.isWildcard
        );
        return isWildcards;
    }

    private isAllEqual(card1: Card, card2: Card, card3: Card): boolean {
        const isEqual = card1.type === card2.type && card1.type === card3.type;
        return isEqual;
    }

    private isEqualWithOneWildcard(card1: Card, card2: Card, card3: Card): boolean {
        const fsEqualLastWild = card1.type === card2.type && card3.isWildcard;
        const ftEqualSecondWild = card1.type === card3.type && card2.isWildcard;
        const stEqualFirstWild = card2.type === card3.type && card1.isWildcard;
        const isEqualWithOneWild = fsEqualLastWild || ftEqualSecondWild || stEqualFirstWild;
        return isEqualWithOneWild;
    }

    private isEqualWithTwoWildcards(card1: Card, card2: Card, card3: Card): boolean {
        const fsWild = card1.isWildcard && card2.isWildcard;
        const stWild = card2.isWildcard && card3.isWildcard;
        const ftWild = card1.isWildcard && card3.isWildcard;
        const isTwoWilds = fsWild || stWild || ftWild;
        return isTwoWilds;
    }
}