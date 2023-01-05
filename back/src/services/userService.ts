import { userModel } from "../model";
import { user, IUserModel } from "../interface";

export class UserService {
  constructor(private userModel: IUserModel) {}

  async create(user: user): Promise<user> {
    return await userModel.create(user);
  }
}

const userService = new UserService(userModel);

export { userService };
