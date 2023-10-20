import { Document } from "mongoose";
export interface ITokenSchema extends IToken, Document {
}

export interface IToken {
    realmId: string;
    token_type: string;
    access_token: string;
    expires_in: number;
    refresh_token: string;
    x_refresh_token_expires_in: number;
    id_token: string;
    token_created_at?: number;
    createdAt?:number;
    state: string;
    latency: number;
}
