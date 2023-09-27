import {Schema, model, Types} from "mongoose"
import { IUser } from "../../../interface/user.interface";
import { AuditLogPlugin } from "../../audit-log-plugin/audit-log.plugin";
// import { _auditLogPlugin as _plugin } from "../../..";
const _plugin = AuditLogPlugin.Instance

export const userSchema = new Schema({
    userName: Schema.Types.Mixed, homeCity: String
},{versionKey: false, timestamps: true})
.pre("save",_plugin.logChangesForNewDoc())
.post( new RegExp("update","gi"), _plugin.logChangesForOldDoc())
.pre( new RegExp("delete","gi"), _plugin.logDocumentDeletion())

export const User = model<IUser>("user",userSchema);