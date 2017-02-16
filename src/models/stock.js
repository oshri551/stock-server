export class Stock {
    constructor(symbol, companyName,value) {
        this.symbol = symbol;
        this.companyName = companyName;
        this.value = value;
    }

    setValue() {
        this.value = this.value + (Math.random()*2 -1);
    }
}