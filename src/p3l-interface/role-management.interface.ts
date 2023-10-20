import { Document } from "mongoose";

export interface IRoleManagement extends Document, RoleManagementSchema {
}

export interface RoleUser {
    businessPhones: string[];
    displayName: string;
    givenName: string;
    jobTitle?: string;
    mail: string;
    mobilePhone?: number;
    officeLocation?: string;
    preferredLanguage: string;
    surname: string;
    userPrincipalName: string;
    id: string;
    addedToDb: boolean;
}

export interface Permission {
    module: string;
    visibility: boolean;
    create: boolean;
    update: boolean;
    read: boolean;
    delete: boolean;
}

export interface RoleManagementSchema {
    role: string;
    permissions: Permission[];
    users?: string[];
}


