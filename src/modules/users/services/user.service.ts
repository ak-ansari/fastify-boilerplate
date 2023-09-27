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
  public async updateUser(newDoc: IUser): Promise<IUser| null> {
    try {
      return await User.findOneAndUpdate({_id: newDoc._id}, {$push: {"userName.name.last": newDoc.userName},$set:{homeCity:"kota"}});
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
