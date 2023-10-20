import { Document } from "mongoose";

export interface INotification extends Document {
    message: string,
    date: Date,
    read: boolean,
    projectMembers: projectMembers[],
    projectId: string,
    createdBy: string,
    ok: number;
    n: number;
    nModified: number;
}

export interface INotificationSchema {
    message: string,
    date: Date,
    read: boolean,
    projectMembers: projectMembers[],
    projectId: string,
    createdBy: string,
    ok: number;
    n: number;
    nModified: number
}
export interface projectMembers {
    member: string,
    read: boolean
}
