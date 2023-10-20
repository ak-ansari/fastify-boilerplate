import { Document } from "mongoose";

interface INonDisplayLedger{
    ledName: string[];
    createdBy: string;
    updatedBy: string;
}
export interface NonDisplayLedSchema extends Document, INonDisplayLedger{}