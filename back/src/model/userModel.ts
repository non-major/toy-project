import { db } from "../db/database";
import { user, IUserModel } from "../interface";

export class UserModel implements IUserModel {
  async create(user: user): Promise<any> {
    const { email, password, nickname } = user;
    const newUser = await db.execute(
      `INSERT INTO PolarBear.users (email,password,nickname) VALUES (?,?,?)`,
      [email, password, nickname]
    );
    return newUser[0];
  }
}

export const userModel = new UserModel();
