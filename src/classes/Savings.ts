import type { HasFormatter } from "../interfaces/HasFormatter.js";

export class Savings implements HasFormatter {
  constructor(
    public clientName: string,
    public type: string,
    public amount: number
  ) {}
  format() {
    return `${this.clientName} has a savings of $${this.amount}`;
  }
}
