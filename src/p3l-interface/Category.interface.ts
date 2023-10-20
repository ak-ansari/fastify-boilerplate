import { Document } from "mongoose";
export interface ICategory extends Document {
    category: string;
}
