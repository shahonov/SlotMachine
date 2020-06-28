export type CardType = 'apple' | 'banana' | 'pineapple' | 'wildcard' | 'coin';

export interface Pair {
    index: number;
    isLoading: boolean;
    value: CardType;
}

export class Spinners {
    
    private static availableCards: CardType[] = [];
    private static totalCards = 12;
    private static totalRows = 4;

    public static pairs: Pair[] = [
        { index: 0, isLoading: false, value: 'coin' },
        { index: 1, isLoading: false, value: 'coin' },
        { index: 2, isLoading: false, value: 'coin' },
        { index: 3, isLoading: false, value: 'coin' },
        { index: 4, isLoading: false, value: 'coin' },
        { index: 5, isLoading: false, value: 'coin' },
        { index: 6, isLoading: false, value: 'coin' },
        { index: 7, isLoading: false, value: 'coin' },
        { index: 8, isLoading: false, value: 'coin' },
        { index: 9, isLoading: false, value: 'coin' },
        { index: 10, isLoading: false, value: 'coin' },
        { index: 11, isLoading: false, value: 'coin' }
    ];

    // handles probabilities of taking a random cards from the array
    public static initCards(): void {
        const apples = this.generateCards('apple', 45);
        const bananas = this.generateCards('banana', 35);
        const pineapples = this.generateCards('pineapple', 15);
        const wildcards = this.generateCards('wildcard', 5);
        this.availableCards.push(...apples, ...bananas, ...pineapples, ...wildcards);
    }

    public static generateCards(value: CardType, count: number): CardType[] {
        const values: CardType[] = [];
        for (let i = 0; i < count; i++) {
            values.push(value);
        }
        return values;
    }

    public static spinAll(forceUpdate: () => void): void {
        this.pairs.forEach(x => {
            x.isLoading = true;
            x.value = 'coin';
        });
        forceUpdate();
    }

    public static randomUnspinAll(forceUpdate: () => void): void {
        const timeout = 200;
        const indeces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        let interval = setInterval(() => {
            const index = Math.floor(Math.random() * indeces.length);
            const pairIndex = indeces[index];
            indeces.splice(index, 1);
            const cardIndex = Math.floor(Math.random() * this.availableCards.length);
            const card = this.availableCards[cardIndex];
            this.pairs[pairIndex].isLoading = false;
            this.pairs[pairIndex].value = card;
            forceUpdate();
        }, timeout);

        setTimeout(() => {
            clearInterval(interval);
        }, timeout * this.totalCards);
    }
}