import {Schema, model, Types} from "mongoose"
import { IUser } from "../../../interface/user.interface";
import { AuditLogPlugin } from "../../audit-log-plugin/audit-log.plugin";
// import { _auditLogPlugin as _plugin } from "../../..";
const _plugin = AuditLogPlugin.Instance

export const userSchema = new Schema({
    userName: Schema.Types.Mixed, homeCity: String
},{versionKey: false, timestamps: true})
.pre("save",_plugin.logChangesSaveDoc())
.pre( /\b(?!updateMany\b)\w*update\w*/gi, _plugin.setOldDoc())
.pre( /updateMany/gi, _plugin.setOldDocsMany())
.post( /\b(?!updateMany\b)\w*update\w*/gi, _plugin.logChangesForUpdateSingleDoc())
.post( /updateMany/gi, _plugin.logChangesForUpdateMany())
.pre( new RegExp("delete","gi"), _plugin.logDocumentDeletion())

export const User = model<IUser>("user",userSchema);