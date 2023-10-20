import { Document } from "mongoose";


export interface IItAssetMgmt extends Document, IItAssetMgmtSchema {

}

export interface IItAssetMgmtSchema {
    assetId: string;
    assetType: string;
    laptopType: string;
    assetOwnership: string;
    serialNo: string;
    purchaseDate: Date;
    make: string;
    modelNo: string;
    configuration: string;
    officeLocation: string;
    warrantyStartDate: Date;
    warrantyEndDate: Date;
    assetStatus: string;
    repairReason: string;
    user: string;
    currentDeviceLocation: string;
    allocationDate: Date;
    deallocationDate: Date;
    createdBy: string;
    updatedBy: string;
}