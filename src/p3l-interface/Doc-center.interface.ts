import { Document } from "mongoose";
import { IFilesDetails } from "./Project.interface";

export interface IDocCenter extends Document {
    docId: string;
    documentType: string;
    documentCategory: string;
    documentName: string;
    workRelated: string;
    policyDocument: string;
    policyArea: string;
    workType: string;
    listOfMembers: string[];
    listOfRead: string[];
    listOfShare: string[];
    listOfDelete: string[];
    listOfUpdate: string[];
    accessRead?: boolean;
    accessShare?: boolean;
    accessDelete?: boolean;
    accessUpdate?: boolean;
    uploadFiles: IFilesDetails;
    uploadFilesHistory: IFilesDetails[];
    createdBy: string;
    updatedBy: string;
}

