import { IAuditLog } from "../../../interface/audit.interface";
import { Schema, model } from "mongoose";

const AuditSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref:"user", require: true},
    userName: {type:String, require: true},
    action: {type:String, require: true},
    collectionName: {type:String, require: true},
    details: {type: Schema.Types.Mixed, require: false},
    docId:{type:Schema.Types.ObjectId}
}, {timestamps: true, versionKey: false});

export default model<IAuditLog>("auditLog", AuditSchema)