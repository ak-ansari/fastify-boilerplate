import { IFilesDetails } from "./Project.interface";
import mongoose from "mongoose"
export interface IprojectInvoice{
    invoiceDetails: Iinvoice_data,

}
export interface IOpeInvoice{
    opeDetails:IOpeData

}
export interface Iinvoice_data {
    _id: mongoose.Types.ObjectId;
    projectId: string;
    currencyType: string
    invoiceAmount: string;
    invoiceStatus?: string;
    invoicePdf: IFilesDetails[];
    dateOfInvoice: Date;
    invoiceSubject: string;
    raisedInvoiceAt?: Date;
    receiptAmount?: number;
    receiptDate?: Date;
    invoiceNo?: number;
    paymentSummary?: InvoicePaymentSummary[];
    projectTitle: string;
    type: string

}
interface InvoicePaymentSummary{
    paymentReceivedDate: Date;
    paymentReceivedAmount: number;
    paymentReceivedTypes: string;
}
export interface IOpeData {
    _id: mongoose.Types.ObjectId;
    type: string;
    projectId: string;
    currencyType: string
    oPEAmountCharged: string;
    invoiceStatus?: string;
    invoicePdf: IFilesDetails[];
    dateOfoPECharged: Date;
    invoiceSubject: string;
    raisedInvoiceAt?: Date;
    receiptAmount?: number;
    receiptDate?: Date;
    invoiceNo?: number;
    paymentSummary?: InvoicePaymentSummary[];
    projectTitle: string;

}