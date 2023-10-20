import { Document } from "mongoose";

export interface IModule extends Document {
 moduleName: string;
 order:number;
}
