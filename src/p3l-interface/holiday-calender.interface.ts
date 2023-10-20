import { Document } from "mongoose";

export interface Iholiday extends Document, HolidaySchema {
}
export interface HolidaySchema{
    holidayName: string;
        holidayDate: Date;
        finYear:string;
        mandatoryIn:string[];
        flexibleIn:string[];
        createdBy:string;
}