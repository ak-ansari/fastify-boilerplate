import { Document } from "mongoose";

export interface IClientSchema extends Document, IClient {
}

export interface IClient {
    clientName: string;
    active: boolean;
    createdAt?: Date;
}
