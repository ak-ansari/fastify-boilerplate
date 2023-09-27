// expense models
// import { Advisor } from "../../../model/advisor.model";
// import HotelModel from "../../../model/Expenses/Hotel.model";
// import ReimbursementModel from "../../../model/Expenses/Reimbursement.model";
// import TravelModel from "../../../model/Expenses/Travel.model";
// import VendorModel from "../../../model/Expenses/Vendor.model";
// import { IUser } from "../../users/static/user.interface";

import { InterfaceType } from "typescript";
import { userSchema } from "../../users/static/user.model";
import { Schema } from "mongoose";

export const allModels: { [key: string]: Schema } = {
  userSchema,
};
export const collectionNameEnum: {[key: string]: string}= {
  userSchema: "user"
}
export const interfaceEnum : Record<string, string>={
  userSchema:"IUser"
}