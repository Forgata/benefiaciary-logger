export class Current {
    constructor(clientName, type, amount) {
        this.clientName = clientName;
        this.type = type;
        this.amount = amount;
    }
    format() {
        return `${this.clientName} has a current balance of $${this.amount}`;
    }
}
//# sourceMappingURL=Current.js.map