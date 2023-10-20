import { Document } from "mongoose";
import { IFilesDetails } from "./Project.interface";

export interface IProjectViewSchema extends Document, IProjectView {
}

export interface IProjectView {
    projectId: string;
    projectTitle: string;
    projectOwners: string[];
    projectDescription?: string;
    projectType?: string;
    files?: IFilesDetails[];
    oPEAmount?: number;
    projectManagers?: string[];
    startDate?: Date;
    endDate?: Date;
    projectStatus?: string;
    quickBooksClassName:string,

}
