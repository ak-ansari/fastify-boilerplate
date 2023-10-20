import mongoose,{ Document } from "mongoose";
import { IFilesDetails } from "./Project.interface";

export interface IOpportunity extends Document, OpportunitySchema {

}

export interface OpportunitySchema {
    projectRef: mongoose.Types.ObjectId;
    mdApproval: string;
    opportunityId: string;
    dateOfOpportunity: Date;
    opportunityName: string;
    opportunityDescription: string;
    clientName: string;
    opportunityValue: number;
    proposalStrategy: string;
    opportunityStatus: string;
    projectDuration: number;
    draftSave: boolean;
    opportunityDirector: string;
    bidManager: string;
    officeLocation: string;
    area: string;
    sector: string;
    reasonOfWin: string;
    reasonOfLoss: string;
    dateOfClosure: Date;
    eoiDoc: IFilesDetails;
    rfpDoc: IFilesDetails;
    proposalDoc: IFilesDetails;
    supportDoc:IFilesDetails;
    createdBy: string;
    updatedBy: string;
    bidMember: string;
    valueOfOpp: string;
    nameOfWon: string;
    other: string;

}