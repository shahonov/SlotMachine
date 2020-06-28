export type CardType = 'apple' | 'banana' | 'pineapple' | 'wildcard' | 'coin';

export interface Pair {
    isLoading: boolean;
    value: CardType;
    isWin: boolean;
}

export class Spinners {
    
    private static availableCards: CardType[] = [];
    private static totalCards = 12;
    private static totalRows = 4;

    public static pairs: Pair[] = [
        { isWin: false, isLoading: false, value: 'coin' },
        { isWin: false, isLoading: false, value: 'coin' },
        { isWin: false, isLoading: false, value: 'coin' },
        { isWin: false, isLoading: false, value: 'coin' },
        { isWin: false, isLoading: false, value: 'coin' },
        { isWin: false, isLoading: false, value: 'coin' },
        { isWin: false, isLoading: false, value: 'coin' },
        { isWin: false, isLoading: false, value: 'coin' },
        { isWin: false, isLoading: false, value: 'coin' },
        { isWin: false, isLoading: false, value: 'coin' },
        { isWin: false, isLoading: false, value: 'coin' },
        { isWin: false, isLoading: false, value: 'coin' }
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