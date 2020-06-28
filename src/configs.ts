export type CardType = 'apple' | 'banana' | 'pineapple' | 'wildcard' | 'coin';

export interface Pair {
    index: number;
    isLoading: boolean;
    value: CardType;
}

export class Spinners {
    static pairs: Pair[] = [
        { index: 0, isLoading: false, value: 'wildcard' },
        { index: 1, isLoading: false, value: 'wildcard' },
        { index: 2, isLoading: false, value: 'wildcard' },
        { index: 3, isLoading: false, value: 'wildcard' },
        { index: 4, isLoading: false, value: 'wildcard' },
        { index: 5, isLoading: false, value: 'wildcard' },
        { index: 6, isLoading: false, value: 'wildcard' },
        { index: 7, isLoading: false, value: 'wildcard' },
        { index: 8, isLoading: false, value: 'wildcard' },
        { index: 9, isLoading: false, value: 'wildcard' },
        { index: 10, isLoading: false, value: 'wildcard' },
        { index: 11, isLoading: false, value: 'wildcard' }
    ];

    private static availableCards: CardType[] = ['apple', 'banana', 'pineapple', 'wildcard'];

    static spinAll(forceUpdate: () => void): void {
        this.pairs.forEach(x => {
            x.isLoading = true;
            x.value = 'coin';
        });
        forceUpdate();
    }

    static randomUnspinAll(forceUpdate: () => void): void {
        const timeout = 200;
        const indeces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        let interval = setInterval(() => {
            const index = Math.floor(Math.random() * indeces.length);
            const pairIndex = indeces[index];
            indeces.splice(index, 1);
            const cardIndex = Math.floor(Math.random() * 4);
            const card = this.availableCards[cardIndex];
            this.pairs[pairIndex].isLoading = false;
            this.pairs[pairIndex].value = card;
            forceUpdate();
        }, timeout);

        setTimeout(() => {
            clearInterval(interval);
        }, timeout * 12);
    }
}