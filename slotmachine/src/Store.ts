export class Store {
    
    public creditAmount: number;
    public spinPrice: number;

    constructor(amount: number, spinPrice: number) {
        this.creditAmount = amount;
        this.spinPrice = spinPrice;
    }
}