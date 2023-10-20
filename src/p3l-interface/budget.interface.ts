import mongoose, { Document, LeanDocument } from "mongoose";
import { IProject } from "./Project.interface";

export interface IBudget extends Document {
  groupName: string;
  projects: mongoose.Types.ObjectId[] | IProject[];
  budget: number;
  budgetHistory: {
    [key: string]: number;
  };
  maintainer: mongoose.Types.ObjectId | IUserInfo
}

export interface IExpenseDetails{
  remainingBudget: number;
  totalExpense: number; 
  reimbursements: number;
  supplierPayments: number;
  // timeCost: number;
  groupName: string;
  totalBudget: number;
  maintainer: IUserInfo
}
export interface IBudgetReport extends LeanDocument<IBudget>, IExpenseDetails{
  maintainer: IUserInfo
}

export interface IUserInfo {
_id: mongoose.Types.ObjectId;
email: string;
userName: string;
}

export interface IFilterQuery{
  search: string;
  offset: number;
  limit: number;
  filter: unknown;
  count: boolean
}