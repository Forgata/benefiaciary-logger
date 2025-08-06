import type { HasFormatter } from "../interfaces/HasFormatter.js";
export declare class Savings implements HasFormatter {
    clientName: string;
    type: string;
    amount: number;
    constructor(clientName: string, type: string, amount: number);
    format(): string;
}
//# sourceMappingURL=Savings.d.ts.map