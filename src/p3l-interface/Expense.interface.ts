import { Document } from "mongoose";
import mongoose from "mongoose"
export interface ITravel extends Document, TravelSchema {
}
export interface TravelSchema {
    approvalStatus: string;
    user: string;
    project: string;
    projectTitle: any;
    travelId: string;
    hotelId: string;
    billTo: string;
    categoryType: string;
    modeOfTravel: string;
    description: string;
    from: string;
    to: string;
    pickup: string;
    drop: string;
    airMilesNumber: number;
    travelDate: Date;
    returnDate: Date;
    checkInDate: Date;
    checkOutDate: Date;
    noOfDays: number;
    tripType: string;
    rejectNote: string;
    travelFile: IFilesDetails[];
    level: number;
    travelOccured:string;
    createdBy: string;
    updatedBy: string;
}

export interface IVendorPayment extends Document {
    user: mongoose.Types.ObjectId;
    project: string;
    vendors: IVendorDetails[];
}

export interface IVendorDetails {
    amount: number;
    from: string;
    to: string;
    startDate: Date;
    endDate: Date;
    gst: number;
    tds: number;
    netAmount: number;
    description: string;
    files: IFilesDetails[];
}
export interface IReimbursement extends Document {
    user: string;
    project: string;
    reimbursementId: string;
    approvalStatus: string;
    approvalDate:Date;
    completionDate:Date;
    item: string;
    otherItem: string;
    description: string;
    travelDate: Date;
    travelMode: string;
    level: number;
    reimbursementMode: string;
    from: string;
    to: string;
    hotelName: string;
    checkedInDate: Date;
    checkedOutDate: Date;
    amount: number;
    acceptNote: string;
    rejectNote: string;
    reimbursementFile: IFilesDetails[];
    createdBy: string;
    updatedBy: string;
    approvedBy?: string;
    paymentDoneBy?: string;
    rejectedBy?: string;
    approvalPersonEmail?: string,
    approvalPersonName?: string,

}
export interface IFilesDetails {
    fileName: string;
    fileKey: string;
    createdAt: Date;
    url?: string;
}
export interface IAllCategoryFiles {
    files: IFilesDetails[];
    project: any;
    category: string;
}