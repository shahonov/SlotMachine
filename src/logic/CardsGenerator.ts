import { Card } from "../models/Card";
import { CardType } from "../models/CardType";
import { CardsInfo } from "../models/CardsInfo";
import { Coefficient } from "../models/Coefficient";

export class CardsGenerator {

    private types: CardType[];
    private timeoutDifference: number;

    constructor() {
        this.types = [];
        this.timeoutDifference = 200;
        this.pushTypes('apple', 45);
        this.pushTypes('banana', 35);
        this.pushTypes('pineapple', 15);
        this.pushTypes('wildcard', 5);
    }

    public generate(count: number): CardsInfo {
        const cards: Card[] = [];
        for (let i = 0; i < count; i++) {
            const index = Math.floor(Math.random() * this.types.length);
            const cardType = this.types[index];
            const coefficient = this.getCoefficient(cardType);
            const timeout = Math.floor(Math.random() * (this.timeoutDifference * count));
            const card = new Card(cardType, coefficient, timeout, true);
            cards.push(card);
        }
        const cardsInfo = new CardsInfo(cards);
        return cardsInfo;
    }

    private pushTypes(type: CardType, amount: number): void {
        for (let i = 0; i < amount; i++) {
            this.types.push(type);
        }
    }

    private getCoefficient(type: CardType): Coefficient {
        switch (type) {
            case 'apple': return 0.4;
            case 'banana': return 0.6;
            case 'pineapple': return 0.8;
            case 'wildcard': return 0;
            default: return 0;
        }
    }
}