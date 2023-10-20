import { OpportunitySchema } from "./opportunity-tracker.interface";

export interface IOptions{
    label: string;
    value: string;
}
export interface IOppOptions extends OpportunitySchema{
    label: string;
}