import { Document } from "mongoose";

export interface Ilocation extends Document, LocationSchema {}

export interface LocationSchema{
    lable:string, value:string
}