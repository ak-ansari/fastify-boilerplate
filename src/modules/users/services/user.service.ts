import { IUser } from "../static/user.interface";
import { User } from "../static/user.model";

export class UserService {
  public async addUser(user: IUser): Promise<IUser> {
    try {
      return await User.create(user);
    } catch (error) {
      throw error;
    }
  }
}
