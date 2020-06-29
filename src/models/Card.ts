import { CardType } from "./CardType";
import { Coefficient } from "./Coefficient";

export class Card {

    constructor(type: CardType, coefficient: Coefficient, timeout: number, isLoading: boolean) {
        this.type = type;
        this.coefficient = coefficient;
        this.timeout = timeout;
        this.isLoading = isLoading;
    }

    public type: CardType;
    public coefficient: Coefficient;
    public timeout: number;
    public isLoading: boolean;

    public get isWildcard(): boolean {
        return this.type === 'wildcard';
    }
}