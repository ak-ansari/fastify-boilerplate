import { Document } from "mongoose";

export interface IGeneralSettings extends Document, IGeneralSettingsSchema {
    
}
export interface IGeneralSettingsSchema {
    accountSoftware:string;
    settingsId: string;
}
