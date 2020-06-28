export class Credit {
    public static credit: number = 500;
    public static stake: number = 5;

    public static collectAward(coefficient: number, forceUpdate: () => void): void {
        const totalWon = this.stake * coefficient;
        this.credit = this.credit + totalWon;
        forceUpdate();
    }
}