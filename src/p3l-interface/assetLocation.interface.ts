import { Document } from "mongoose";

export interface IassetLocation extends Document, assetLocation {}

export interface assetLocation{
    label:string, value:string
}