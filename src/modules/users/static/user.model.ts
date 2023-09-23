import {Schema, model} from "mongoose"
import { IUser } from "./user.interface";
const userSchema = new Schema({
    userName: String, homeCity: String
});
export const User = model<IUser>("user",userSchema);