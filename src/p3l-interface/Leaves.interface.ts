import { Document } from "mongoose";
import mongoose from "mongoose";

export interface ILeaves extends Document, LeavesSchema {
}
export interface LeavesSchema {
    leaveId: string;
    user: {_id:string; userName: string} | mongoose.Types.ObjectId | string;
    reportingManager: string;
    timesheets: TimesheetWeek[];
    singleOrMultiple: string;
    status: string;
    halfOrFull: string;
    typeOfLeave: string;
    numberOfLeaves: number;
    reason: string;
    startDate: Date;
    endDate: Date;
    rejectNote?: string;
    rejectedBy:string,
    approvedBy:string,
    verifiedBy: string,
    createdBy:string,
    updatedBy:string,
    additionalLeaves: boolean;
}
interface TimesheetWeek {
    project: string;
    monday: Day;
    tuesday: Day;
    wednesday: Day;
    thursday: Day;
    friday: Day;
    saturday: Day;
    sunday: Day;
    totalHours: number;
    totalProjectCostPerWeek: number;
}
interface Day {
    value: string;
    date: Date;
}
