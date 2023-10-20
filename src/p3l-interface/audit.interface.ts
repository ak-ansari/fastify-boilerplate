import { Document, Types} from "mongoose";

export interface IAuditLog extends Document {
    userId: Types.ObjectId,
    userEmail: string
    action: string,
    collectionName: string,
    details: any,
    docId: Types.ObjectId
}

export interface IChangeLog {
    oldValue: any;
    newValue: any;
    operator?: string;
    stack?: string;
  }