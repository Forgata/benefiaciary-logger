export class Savings {
    constructor(clientName, type, amount) {
        this.clientName = clientName;
        this.type = type;
        this.amount = amount;
    }
    format() {
        return `${this.clientName} has a savings of $${this.amount}`;
    }
}
//# sourceMappingURL=Savings.js.map