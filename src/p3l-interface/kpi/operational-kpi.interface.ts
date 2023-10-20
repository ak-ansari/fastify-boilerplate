import {Document} from "mongoose";

export interface OperationalKpi extends Document,OperationalKpiInterface{}

// interface OperationalKpiInterface{
//     period: string;
//     quarter: string;
//     totalBillableHours: number;
//     totalHours: number;
//     totalManMonths: number;
//     totalCost: number;
//     debtorsOutstandings: number;
//     finYear: string;
//     date?: Date[];
//     status: string;
//     utilizationPer: number;
// }
interface OperationalKpiInterface{
    date: [Date, Date],
    totalBillableHours: number;
    totalHours: number;
    quarter: string;
    period: string;
    finYear: string;
    utilizationPer: number;
    // debtorsOutstandingKpi: number;
    // grossQuarterlyRevenue: number;
    // debtorsPercent: number;
    status: string
}