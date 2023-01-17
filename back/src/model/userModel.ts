import { pg } from "../db/database";
import { user, IUserModel, rank } from "../interface";
export class UserModel implements IUserModel {
  async findAll(): Promise<user[]> {
    const users = await pg.query(
      `select id,email,nickname,post_count,status from users`
    );

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

  async findByPassword(id: number): Promise<user> {
    const user = await pg.query(
      `SELECT id,password FROM users WHERE id = ($1)`,
      [id]
    );
    return user.rows[0];
  }

  async findById(id: number): Promise<user> {
    const users = await pg.query(
      `SELECT id,email,nickname,post_count,status FROM users WHERE id = ($1)`,
      [id]
    );
    return users.rows[0];
  }

  async update(id: number, toUpdate: user): Promise<user> {
    const { nickname } = toUpdate;
    return await pg
      .query(`UPDATE users SET nickname = ($1) WHERE id = ($2)`, [nickname, id])
      .then(() => this.findById(id));
  }

  async delete(id: number): Promise<user[]> {
    const deleteUser = await pg.query(`DELETE FROM users WHERE id = ($1)`, [
      id,
    ]);
    return deleteUser.rows[0];
  }

  async rank(): Promise<rank[]> {
    const userRank = await pg.query(
      `select id,nickname,post_count from users order by post_count desc limit 5;`
    );

    return userRank.rows;
  }
}

export const userModel = new UserModel();
