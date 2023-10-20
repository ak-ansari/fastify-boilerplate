import { Document } from "mongoose";

export interface ComplianceKpiSchema extends Document, IComplianceKpi{}

export interface IComplianceKpi{
    location : string;
    quarter: string;
    period: string;
    finYear: string;
    item: string;
    nonCompliance: number;
    compliancePercent: number;
    status: string;
    createdBy: string;
    updatedBy: string;
    createdAt: Date;
    updatedAt: Date;
    date:[Date, Date];
    
}