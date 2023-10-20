import mongoose,{ Document } from "mongoose";
import { IFilesDetails } from "./Project.interface";

export interface IAdvisorSchema extends IAdvisor, Document{}

export interface IAdvisor {
    advisorId: string;
    advisorName: string;
    startDate:Date;
    endDate:Date;
    extension:Date;
    location:string,
    project: mongoose.Types.ObjectId;
    projectDirector: mongoose.Types.ObjectId;
    fees:number;
    feesDesc:string;
    category: mongoose.Types.ObjectId;
    createdBy: mongoose.Types.ObjectId;
    updatedBy: mongoose.Types.ObjectId;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
    completedAt?: Date;
    contractDoc: IFilesDetails[];
}