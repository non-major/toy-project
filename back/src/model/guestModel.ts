import { pg } from "../db/database";
import { user, IGuestModel } from "../interface";
export class GuestModel implements IGuestModel {
  async create(user: user): Promise<user> {
    const { email, password, nickname } = user;
    const newUser = await pg.query(
      `INSERT INTO users (email,password,nickname) VALUES ($1,$2,$3)RETURNING*`,
      [email, password, nickname]
    );
    return newUser.rows[0];
  }
}

export const guestModel = new GuestModel();
