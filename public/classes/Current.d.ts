import type { HasFormatter } from "../interfaces/HasFormatter.js";
export declare class Current implements HasFormatter {
    clientName: string;
    type: string;
    amount: number;
    constructor(clientName: string, type: string, amount: number);
    format(): string;
}
//# sourceMappingURL=Current.d.ts.map