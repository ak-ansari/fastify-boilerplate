import { Document } from "mongoose";

export interface IVoucher extends Document, VoucherSchema {
}

export interface VoucherSchema {
    vouchers: string;
}

export interface ISales extends Document, ISalesSchema{
}

export interface ISalesSchema {
    Sale : ISale[];
}

interface ISale{
    masterId : string;
    billNumber: string;
    billDate: string;
    RefNo: string;
    RefDate: string;
    customerName: string;
    PartyName: string;
    party_code: string;
    Desp_Doc_No: string;
    Desp_through: string;
    Destination: string;
    Date: string;
    Consignee_Name: string;
    Consignee_Addr: string;
    Consignee_State: string;
    Consignee_GST: string;
    Sales_Ledg: string;
    Reference: string;
    Tot_BillAmt: string;
    Cancelled:string;
    timestamp: string;
    ledgerDetails : ILedgerDetails[]
}

export interface ILedgerDetails{
    ledName : string;
    ledValue : string;
    CCName: string ,
    CCValue: string,

}
