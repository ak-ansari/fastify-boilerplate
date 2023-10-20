
import { IFilesDetails } from "./Project.interface";

export interface IDashboardData {
    project_id?: string,
    projectTitle: string,
    projectDescription: string;
    documents: string[];
    projectOwners: string[];
    projectManagers: string[];
    projectMembers: string[];
    oldProjectOwners?: string[];
    oldProjectManagers?: string[];
    oldProjectMembers?: string[];
    endDate: Date;
    projectBudget: number;
    projectExecution: string;
    sector: string;
    projectType: string;
    startDate: Date;
    totalHoursPerUser: number;
    totalHoursPerProject: number;
    ultimateClient: string;
    secondaryClient: string;
    projectBillable: boolean;
    projectProposal: boolean;
    workOrderReceived: boolean;
    anyAgreementSigned: boolean;
    projectClosed: boolean;
    projectValue: number;
    billingType: string;
    subContractBudget: boolean;
    consortiumMember: string;
    placeOfDelivery: string;
    dayToReceiveThePayment: number;
    category: string;
    projectArea: string;
    oPE: boolean;
    totalHoursPerDayPerUser: any;
    totalHoursPerDayPerProject: any;
    projectStatus: string;
    trashProject: boolean;
    files: IFilesDetails[];
    signedAgreement: IFilesDetails[];
    workOrder: IFilesDetails[];
    gstCertificate: IFilesDetails[];
    projectDeliverables: IFilesDetails[];
    projectStatusReport: IFilesDetails[];
    clientCommunications: IFilesDetails[];
    clientFeedbacks: IFilesDetails[];
    projectKt: IFilesDetails[];
    projectClosure: IFilesDetails[];
    invoiceDetails: InvoiceDetail[];
    opeDetails: OpeDetail[];
    subContractorDetails: SubContractorDetail[];
    projectId: string;
    clientID: string;
    clientName: string;
    clientGSTID: string;
    clientPANNo: string;
    clientTANNo: string;
    clientBillingAddress: ClientBillingAddress[];
    projectCustomers: string[];
    quickBooksClassName: string;
    totalProjectCost: number;
    profitAndLoss?: any
    quickBooksInvoice?: any;
    usersTotalHoursList?: any;
    currencyType?: string
}
export interface InvoiceDetail {
    invoiceAmount: string;
    dateOfInvoice: Date;
    invoiceSubject: string;
    raisedInvoiceAt?:Date;

    receiptAmount?: number;
    receiptDate?:Date;
    invoiceNo?:number;
}

export interface OpeDetail {
    oPEAmountCharged: number;
    dateOfoPECharged: Date;
    receiptAmount?: number;
    receiptDate?:Date;
    invoiceNo?:number;
}

export interface SubContractorDetail {
    subContractorAmount: string;
    dateOfSubContractorPayment: Date;
    subContractorName:string
    paymentAmount?: number;
    paymentDate?:Date;
    subContractDescription?:string;
}

export interface ClientBillingAddress {
    addressLine1: string;
    addressLine2: string;
    postalCode: string;
    city: string;
    country: string;
}

export interface QuickBooksClassName {
    Columns: any;
    Header: any;
    Rows: any;
    Invoice?: any;
}
export interface Members {
    _id: string; userName: string;
}
export interface ProjectMembersUserCost { members: Members[]; projectId: string }
