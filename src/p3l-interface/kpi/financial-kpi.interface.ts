import { Document } from "mongoose";
export interface FinancialKpiSchema extends Document,FinancialKpi {}
// interface FinancialKpi{
//     quarter: string;
//     period: string;
//     finYear: string;
//     year: string;
//     totalRevenue: number;
//     grossRevenue: number;
//     subContractingExpense: number;
//     // totalManMonth: number;
//     grossProfit: number;
//     openingCount: number;
//     closingCount: number;
//     avgCount: number;
//     netProfit: number;
//     totalCost: number;
//     inflow: number;
//     outflow: number;
//     status: string;
//     date: Date[];
// }
interface FinancialKpi{
    date:[Date,Date],
    grossRevenue: number;
    avgNoOfEmployees: number;
    revenuePerEmployee:number;
    totalCost: number;
    costPerEmployee: number;
    netProfit: number;
    netProfitPerEmployee:number;
    inflow: number;
    outflow: number;
    churnRatio: number;
    totalDebtorsOutstanding: number;
    grossRevenueExlOtherIncome: number;
    receivablesRatio:number;
    quarter: string;
    period: string;
    finYear: string;
    totalRevenue: number;
    subContractingExpense: number;
    grossProfit: number;
    openingCount: number;
    closingCount: number;
    status: string;
}