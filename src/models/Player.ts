export class Player {

    constructor(funds: number, stake: number) {
        this.funds = funds;
        this.stake = stake;
    }

    public funds: number;
    public stake: number;

    public changeStake(newStake: number): void {
        this.stake = newStake;
    }

    public depositFunds(funds: number): void {
        this.funds = funds;
    }
}