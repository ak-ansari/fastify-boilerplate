import { Document } from "mongoose";
import { IFilesDetails } from "./Project.interface";


export interface IResignation extends Document, IResignationSchema {

}

export interface IResignationSchema {
    resignationNote: string;
    relievingDate: Date;
    earlyrelievingDate: Date;
    reasonOfEarlyRelieving: string;
    lastDateOfApproval: Date;
    remark: string;
    createdBy: string;
    updatedBy: string;
    rejectNote: string;
    status: string;
    performanceManager: string;
    reportingManager: string;
    rejectedBy: string;
    adminClearance: boolean;
    financeClearance: boolean;
    hrClearance: boolean;
    itClearance: boolean;
    reportingClearance: boolean;
    adminClearanceBy: string;
    itClearanceBy: string;
    hrClearanceBy: string;
    financeClearanceBy: string;
    reportingClearanceBy: string;
    adminClearanceData: adminClearanceForm;
    financeClearanceData: financeClearanceForm;
    hrClearanceData: hrClearanceForm;
    itClearanceData: itClearanceForm;
    reportingClearanceData: reportingClearanceForm;
}

export interface adminClearanceForm {
    idCardReturned: string;
    insuranceCompanyInformed: string;
    adminDescription: string;
}

export interface financeClearanceForm {
    allExpenseSubmitted: string;
    insuranceClaimSubmitted: string;
    allSupportingDocuments: string;
    fullAndFinalSettlement: string;
    sodexo: string;
    updatingPfPortal: string;
    holdSalary: string;
    financeDescription: string;
}

export interface hrClearanceForm {
    resignationEmailAvailable: string;
    resignationApproval: string;
    noticePeriodShortfall: string;
    experienceLetter: string;
    recoveryShortfall: string;
    waveOff: string;
    timeSheetFilledUp: string;
    leaveBalance: string;
    noticePeriodRecovery: string;
    relievingLetterIssued: string;
    whatsAppGroupRemoval: string;
}

export interface itClearanceForm {
    laptopReturned: string;
    dataCardReturned: string;
    emailIDClosed: string;
    emailBackupKept: string;
    mailingGroupsUpdated: string;
    websiteUpdated: string;
    anyOtherItAsset: string;
    itAssetButton: string;
    laptopDataBackUp: string;
    itAssetImage:IFilesDetails[];
    itDescription: string;
}

export interface reportingClearanceForm {
    handoverDocuments: string;
    laptopBackup: string;
    emailBackup: string;
    projectTransition:IFilesDetails[];
    otherUploads:IFilesDetails[];
    rmDescription: string;
}