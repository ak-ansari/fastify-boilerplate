import { Document } from "mongoose";
export interface IInvoice extends Document,InvoiceForm{}


export interface InvoiceForm{
  
    invoiceNumber:string,
    invoiceAmount: number,
    invoiceDate: Date,
    invoiceStatus: string,
    invoiceDetails: [
      {
        paymentToBeMade: number,
        remainingPayment?: number,
        payType: string,
        addRemark?: string,
        penaltyPayment?: number,
        paymentDate?: Date,
      },
    ],
    invoiceDoc :[{ fileName: string, fileKey: string, createdAt: Date }],
  
      
}