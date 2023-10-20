import { Document } from "mongoose";
import mongoose from "mongoose"

export interface timesheetSchema extends ITimesheet, Document {

}

export interface ITimesheet {
    user: mongoose.Types.ObjectId | string;
    timesheets: TimesheetWeek[];
    startDate: Date;
    endDate: Date;
    dailyHrs?: DailyHrs;
}

export interface ITimesheets {
    user?: string;
    timesheets?: TimesheetWeek;
    startDate?: Date;
    endDate?: Date;
    dailyHrs?: DailyHrs;
}

export interface TimesheetWeek {
    category:string;
    project: string;
    sunday: day;
    monday: day;
    tuesday: day;
    wednesday: day;
    thursday: day;
    friday: day;
    saturday: day;
    totalHours: number;
    totalProjectCostPerWeek: number;
}

export interface day {
    value: string;
    date: string;
}
export interface DailyHrs {
    totalHrsOnMonday: number;
    totalHrsOnTuesday: number;
    totalHrsOnWednesday: number;
    totalHrsOnThursday: number;
    totalHrsOnFriday: number;
    totalHrsOnSaturday: number;
    totalHrsOnSunday: number;
}
