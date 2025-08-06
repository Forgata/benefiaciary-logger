import type { HasFormatter } from "../interfaces/HasFormatter.js";

export class Current implements HasFormatter {
  constructor(
    public clientName: string,
    public type: string,
    public amount: number
  ) {}
  format() {
    return `${this.clientName} has a current balance of $${this.amount}`;
  }
}
