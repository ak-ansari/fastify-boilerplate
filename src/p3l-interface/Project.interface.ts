import mongoose, { Document } from "mongoose";
export interface IProject extends Document {
    oppId: string;
    oppRef: mongoose.Types.ObjectId;
    projectTitle: string;
    ytd: number;
    mtd: number;
    draftMode?: boolean;
    projectOwners: string[];
    projectManagers: string[];
    projectMembers: string[];
    oldProjectOwners?: string[];
    oldProjectManagers?: string[];
    oldProjectMembers?: string[];
    lastProjectOwners?: string[];
    lastProjectManagers?: string[];
    lastProjectMembers?: string[];
    projectCustomers:any ;
    startDate: Date;
    endDate: Date;
    projectDescription: string;
    sector: string;
    otherSector: string;
    projectExecution: string;
    ultimateClient: string;
    secondaryClient: string;
    projectType: string;
    projectBudget: number;
    projectBillable: boolean;
    projectProposal: boolean;
    workOrderReceived: boolean;
    anyAgreementSigned: boolean;
    projectClosed: boolean;
    oPE: boolean;
    oPEAmount: number;
    contractBudget: number;
    totalProjectValue: string;
    projectStatus: string;
    trashProject: boolean;
    mileStoneName: string;
    amount: number;
    completionDate: Date;
    billingType: string;
    currencyType: string;
    projectValue: number;
    opeValue: number
    workOrder: IFilesDetails[];
    signedAgreement: IFilesDetails[];
    gstCertificate: IFilesDetails[];
    files: IFilesDetails[];
    projectDeliverables: IFilesDetails[];
    contractValue: number;
    perHourCost: number;
    overallHourCharge: number;
    fixedCost: FixedCost[];
    timeMaterial: TimeMaterial[];
    category: string;
    priority: number;
    createdBy: string;
    updatedBy: string;
    projectId: string;
    approval: string;
    rejectNote: string;
    firstApproval: string;
    mainVerification: string;
    ownerVerification: string;
    approvedBy: string;
    rejectedBy: string;
    verifiedBy: string;
    projectArea: string;
    consortiumMember: string;
    contractorName: string;
    clientID: string;
    clientName: string;
    costCenterName: string;
    quickBooksClassName: string;
    id: string;
    clientGSTID: string;
    clientPANNo: string;
    clientTANNo: string;
    clientBillingAddress: ClientBillingAddress[];
    subContractBudget: boolean;
    totalMileStonesAmount: number
    placeOfDelivery: string;
    regions: string;
    states: string;
    towns: string;
    countries: string;
    enterCity: string;
    invoiceDetails: invoiceDetail[];
    opeDetails: opeDetail[];
    subContractorDetails: subContractorDetail[];
    dayToReceiveThePayment: number;
    officeLocation: string;
    relationshipDirector: string;
    supplierDetails: ILinkSupplier[];
    hoursOfManagingDirector: number;
    hoursOfVicePresident: number;
    hoursOfManager: number;
    hoursOfSeniorConsultant: number;
    hoursOfConsultant: number;
    hoursOfAvp: number;
    projectStatusReport: IFilesDetails[];
    clientCommunications: IFilesDetails[];
    clientFeedbacks: IFilesDetails[];
    projectKt: IFilesDetails[];
    projectClosure: IFilesDetails[];
    eoiRfpDoc: IFilesDetails[];
    proposalDoc: IFilesDetails[];
    supportDoc: IFilesDetails[];

}
export interface ProjectSchema {
    oppId: string;
    oppRef: mongoose.Types.ObjectId;
    projectTitle: string;
    projectOwners: string[];
    projectManagers: string[];
    projectMembers: string[];
    oldProjectOwners?: string[];
    oldProjectManagers?: string[];
    oldProjectMembers?: string[];
    lastProjectOwners?: string[];
    lastProjectManagers?: string[];
    lastProjectMembers?: string[];
    projectCustomers: any;
    startDate: Date;
    endDate: Date;
    draftMode?: boolean;
    projectDescription: string;
    sector: string;
    otherSector: string;
    projectExecution: string;
    ultimateClient: string;
    secondaryClient: string;
    projectType: string;
    projectBudget: number;
    projectBillable: boolean;
    workOrder: IFilesDetails[];
    signedAgreement: IFilesDetails[];
    gstCertificate: IFilesDetails[];
    files: IFilesDetails[];
    projectDeliverables: IFilesDetails[];
    projectStatusReport: IFilesDetails[];
    clientCommunications: IFilesDetails[];
    clientFeedbacks: IFilesDetails[];
    projectKt: IFilesDetails[];
    projectClosure: IFilesDetails[];
    projectProposal: boolean;
    workOrderReceived: boolean;
    anyAgreementSigned: boolean;
    projectClosed: boolean;
    oPE: boolean;
    oPEAmount: number;
    contractBudget: number;
    totalProjectValue: string;
    mileStoneName: string;
    id: string;
    amount: number;
    completionDate: Date;
    projectValue: number;
    opeValue: number;
    billingType: string;
    currencyType: string;
    category: string;
    priority: number;
    createdBy: string;
    updatedBy: string;
    projectId: string;
    rejectNote: string;
    mainVerification: string;
    ownerVerification: string;
    approvedBy: string;
    quickBooksClassName: string;
    rejectedBy: string;
    verifiedBy: string;
    projectArea: string;
    consortiumMember: string;
    contractValue: number;
    perHourCost: number;
    overallHourCharge: number;
    fixedCost: FixedCost[];
    timeMaterial: TimeMaterial[];
    contractorName: string;
    clientID: string;
    clientName: string;
    clientGSTID: string;
    clientPANNo: string;
    clientTANNo: string;
    clientBillingAddress: ClientBillingAddress[];
    subContractBudget: boolean;
    totalMileStonesAmount: number
    placeOfDelivery: string;
    regions: string;
    states: string;
    towns: string;
    countries: string;
    enterCity: string;
    invoiceDetails: invoiceDetail[];
    opeDetails: opeDetail[];
    subContractorDetails: subContractorDetail[];
    dayToReceiveThePayment: number;
    supplierDetails: ILinkSupplier[];
    eoiRfpDoc: IFilesDetails[];
    proposalDoc: IFilesDetails[];
    supportDoc: IFilesDetails[];
}

export interface IFilesDetails {
    fileName: string;
    fileKey: string;
    createdAt: Date;
    url?: string;
}


export interface ClientBillingAddress {
    addressLine1: string;
    addressLine2: string;
    postalCode: string;
    city: string;
    country: string;
}
export interface FixedCost {
    contractValue: number;
}
export interface TimeMaterial {
    perHourCost: number;
    overallHourCharge: number;
}

export interface ProjectQueryParams {
    projectStatus?: string, mainVerification?: string, projectBillable?: boolean, ownerVerification?: string
}


export interface DashboardMetaData {
    projectOwners: number;
    projectManagers: number
    ; projectMembers: number
    ; projectApproval: number
}
export interface invoiceDetail {
    invoiceAmount: string;
    invoiceStatus?: string;
    invoicePdf: IFilesDetails[];
    dateOfInvoice: Date;
    invoiceSubject: string;
    raisedInvoiceAt?:Date;
    receiptAmount?: number;
    receiptDate?:Date;
    invoiceNo?:number;
    paymentSummary?:InvoicePaymentSummary[];
    invoiceDocument:IFilesDetails[];
}

export interface opeDetail {
    oPEAmountCharged: number;
    dateOfoPECharged: Date;
    invoiceSubject: string;
    receiptAmount?: number;
    receiptDate?:Date;
    raisedInvoiceAt: Date;
    invoiceNo?:number;
    invoiceStatus: String;
    invoicePdf: IFilesDetails[];
    invoiceDocument: IFilesDetails[];
    paymentSummary?:InvoicePaymentSummary[];
}

export interface subContractorDetail {
    subContractorAmount: string;
    dateOfSubContractorPayment: Date;
    subContractorName:string
    paymentAmount?: number;
    paymentDate?:Date;
    subContractDescription?:string;
}

export interface IMisMetadata {
    startRow: number,
    endRow: number,
    groupKeys: any[],
    sortModel: any[],
    filterModel?: IFilterModel,
    valueCols: any[]
}

export interface IFilterModel {
    [key: string]: {
        filter: string | number;
        filterType: string;
        type: string;
        filterTo?: number;
        dateFrom?: string;
        dateTo?: string;

    }
}

export interface ILinkSupplier{
    supplier: string;
    contractValue: string;
    startDateOfContract: string;
    endDateOfContract: string;
    contractName: string;
    contractNumber: string;
    invoiceId:mongoose.Types.ObjectId;
    milestoneDetails: IMileStone[];
}

export interface IMileStone{
    invoiceId:mongoose.Types.ObjectId;
    milestoneName: string;
    dateOfMilestone: string;
    milestoneDescription: string;
    milestoneAmount: string;
    requestedPaymentDate: Date;
    milestoneStatus: string;
    milestoneStatusUpdatedBy : string;
    createdby: mongoose.Types.ObjectId;
    verifiedby: mongoose.Types.ObjectId;
    approvedby: mongoose.Types.ObjectId;
    paymentdoneby:mongoose.Types.ObjectId;
    milestoneRejectNote: string;
    paymentSummary: IPaymentSummary[]
}

export interface IPaymentSummary{
    paymentDate : Date;
    paymentAmount: number;
    remainingPayment: number;
    paymentStatus: string;
    penalty: number;
}

export interface InvoicePaymentSummary{
    paymentReceivedDate : Date;
    paymentReceivedAmount: number;
    paymentReceivedTypes: string;
}

export interface ImilestoneData{
            _id: mongoose.Types.ObjectId;
            projectTitle: string;
            projectId: string;
            supplierDetails: any;
            createdby: any[];
            verifiedby: any[];
            approvedby: any[];
            paymentdoneby: any[];
            suppliername: string;
            milestoneStatus: string,
            contractValue: number;
            contractName: string;
            milestoneName: string;
            milestoneDate: Date;
            milestoneAmount: number;
            projectOwner: string;
}
