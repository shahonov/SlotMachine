export class Store {
    
    public creditAmount: number;
    public spinPrice: number;

    constructor(creditAmount: number, spinPrice: number) {
        this.creditAmount = creditAmount;
        this.spinPrice = spinPrice;
    }
}