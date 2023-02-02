import { pg } from "../db/database";
import {
  user,
  IUserModel,
  rank,
  monthPostCount,
  kakaoUser,
} from "../interface";
export class UserModel implements IUserModel {
  async create(user: kakaoUser): Promise<user> {
    const { email, nickname, kakaoId } = user;
    const newUser = await pg.query(
      `INSERT INTO users (email,nickname,kakaoId) VALUES ($1,$2,$3)RETURNING*`,
      [email, nickname, kakaoId]
    );
    return newUser.rows[0];
  }

  async findAll(): Promise<user[]> {
    const users = await pg.query(
      `select  id,email,nickname,status,(select count(*) from posts where posts."userId" = users.id) as post_count
      from users order by id desc`
    );

    return users.rows;
  }

  async findByEmail(email: string | undefined): Promise<user> {
    const users = await pg.query(`SELECT * FROM users WHERE email = ($1)`, [
      email,
    ]);
    return users.rows[0];
  }

  async findByKakaoId(kakaoId: string): Promise<user> {
    const users = await pg.query(`SELECT * FROM users WHERE kakaoId = ($1)`, [
      kakaoId,
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
      `SELECT id,email,nickname,status,(select count(*) from posts where "userId" = ($1)) as post_count FROM users WHERE id = ($1)`,
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

  async kakaoUserUpdate(userId: number, nickname: string): Promise<user> {
    return await pg
      .query(`UPDATE users SET nickname = ($1) WHERE id = ($2)`, [
        nickname,
        userId,
      ])
      .then(() => this.findById(userId));
  }

  async delete(id: number): Promise<user[]> {
    const deleteUser = await pg.query(`DELETE FROM users WHERE id = ($1)`, [
      id,
    ]);
    return deleteUser.rows[0];
  }

  async rank(): Promise<rank[]> {
    const userRank = await pg.query(
      `select nickname ,(
        select count(*)
        from posts as p
        where u.id = p."userId") as post_count
        from users as u
        order by post_count desc limit 5;`
    );

    return userRank.rows;
  }

  async monthPostCount(userId: number): Promise<monthPostCount[]> {
    const monthPostCount = await pg.query(
      `select to_char(date, 'YYYY-MM') as month ,count(*)
    from posts
    where  "userId" = ($1) and date between '2023-01-01' and '2023-12-31' 
    group by month
    order by month`,
      [userId]
    );
    return monthPostCount.rows;
  }
}

export const userModel = new UserModel();
