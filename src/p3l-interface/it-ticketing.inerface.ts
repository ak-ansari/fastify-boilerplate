import mongoose,{ Document} from "mongoose";
import { IFilesDetails } from "./Project.interface";
export interface ItTicketSchema extends Document,ItTicket{}

export interface ItTicket{
    user: mongoose.Types.ObjectId;
    ticketId: string;
    raisedAt: Date;
    ticketStatus: string;
    ticketCategories: string;
    priority: string;
    priorityNo: number;
    otherAsset: string;
    asset: string;
    assetType: string;
    issueRelatedToCategory: string;
    project: string;
    createdBy: string;
    updatedBy: string;
    createdAt: Date;
    updatedAt: Date;
    description: string;
    remark: string;
    itFile: IFilesDetails[];
    invoiceFile: IFilesDetails[];


}