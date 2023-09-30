import { IUser } from "../../../interface/user.interface";
import { User } from "../static/user.model";

export class UserService {
  public async addUser(user: IUser): Promise<IUser> {
    try {
      return await User.create(user);
    } catch (error) {
      throw error;
    }
  }
  public async updateUser(newDoc: IUser): Promise<any> {
    try {
      return await User.updateOne({homeCity:"kota"},{$set:{homeCity:"bundi"}},{new:true});
    } catch (error) {
      throw error;
    }
  }
  public async deleteUser(docId: string): Promise<any> {
    try {
      return await User.deleteMany({_id: docId});
    } catch (error) {
      throw error;
    }
  }
}
