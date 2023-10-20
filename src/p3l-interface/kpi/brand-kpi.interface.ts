import { Document } from "mongoose";
export interface BrandKpiSchema extends Document,BrandKpi{}
interface BrandKpi{
    quarter:string;
    finYear: string;
    period: string;
    year: string,
    thoughtLeadership: number;
    author: number;
    news: number;
    status: string;
    events: number;
    createdBy: string;
    updatedBy: string;
    date:[Date,Date];
}