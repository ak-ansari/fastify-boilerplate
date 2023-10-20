import { Document } from "mongoose";
import { IFilesDetails } from "./Project.interface";


export interface ISupplier extends Document, ISupplierSchema {

}

export interface ISupplierSchema {
    fullName: string;
    fullAddress: string;
    selectType: string;
    coreBusiness: string;
    doI: Date;
    individualDob:Date;
    contactPerson: string;
    personDesignation: string;
    personEmail: string;
    status: string;
    personNumber: number;
    stRegNumber: string;
    msmeRegNumber: string;
    gstNumber: string;
    panNumber: string;
    tanNumber: string;
    switchMsme: boolean;
    switchStartUp: boolean;
    approvalFromUserList: string;
    nameOfBeneficiary: string;
    accountNumber: string;
    accountType: string
    ifscCode: string;
    bankName: string;
    cancelledCheque: IFilesDetails;
    startupCopy: IFilesDetails;
    msmeCopy: IFilesDetails;
    gstCopy: IFilesDetails;
    panCopy: IFilesDetails;
    tanCopy: IFilesDetails;
    regCopy: IFilesDetails;
    filledUpDoc: IFilesDetails;
    createdBy: string;
    updatedBy: string;
    verifiedBy?: string;
    approvedBy?: string;
    causeOfRejection?: string;
    updateSummray?: string;
}

export interface IFilter{
    search: string;
    limit: number;
    offset: number;
}