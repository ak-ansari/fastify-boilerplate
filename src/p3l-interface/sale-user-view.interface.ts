import { Document } from "mongoose";

export interface ISalesUserView extends Document {
    location: string,
    userName: string,
    designation: string,
    graduate: string,
    postGraduate: string,
    phd: string,
    projectArea: string,
    experienceBeforePrimus: number,
    totalWorkExp: number,
}