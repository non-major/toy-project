import { pg } from "../db/database";
import { user, IUserModel } from "../interface";
import { guestModel } from "./guestModel";
export class UserModel implements IUserModel {
  async findAll(): Promise<user[]> {
    const users = await pg.query(`select * from users`);

    return users.rows;
  }

  async findByEmail(email: string | undefined): Promise<user> {
    const users = await pg.query(`SELECT * FROM users WHERE email = ($1)`, [
      email,
    ]);
    return users.rows[0];
  }

  async findByNickname(nickname: string | undefined): Promise<user> {
    const users = await pg.query(`SELECT * FROM users WHERE nickname = ($1)`, [
      nickname,
    ]);
    return users.rows[0];
  }

  async findById(id: number): Promise<user> {
    const users = await pg.query(`SELECT * FROM users WHERE id = ($1)`, [id]);
    return users.rows[0];
  }

  async update(id: number, toUpdate: user): Promise<user> {
    const { nickname } = toUpdate;
    return await pg
      .query(`UPDATE users SET nickname = ($1) WHERE id = ($2)`, [nickname, id])
      .then(() => this.findById(id));
  }
}

export const userModel = new UserModel();
