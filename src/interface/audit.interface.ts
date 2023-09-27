import { Document, Types} from "mongoose";

export interface IAuditLog extends Document {
    user: Types.ObjectId,
    userName: string
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