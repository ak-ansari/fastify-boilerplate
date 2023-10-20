import { Document } from "mongoose";


export interface ICostCenter extends Document, ICostCenterSchema{
    
}

export interface ICostCenterSchema {
    CC_Name: string;
    CC_Code: string;
    CC_Group: string;
}
