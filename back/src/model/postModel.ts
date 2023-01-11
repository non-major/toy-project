import { pg } from "../db/database";
import { post, IPostModel } from "../interface";

export class PostModel implements IPostModel {
  async create(postInfo: post): Promise<post> {
    const { userId, title, content, image } = postInfo;
    const newPost = await pg.query(
      `INSERT INTO posts ("userId", title, content, image) VALUES ($1,$2,$3,$4) RETURNING*`,
      [userId, title, content, image]
    );
    const postCountUpdate = await pg.query(
      `UPDATE users SET post_count =(post_count + 1)WHERE id=($1)`,
      [userId]
    );
    return newPost.rows[0];
  }

  async findPost(postId: number): Promise<post> {
    const findPost = await pg.query(
      `select *,(select nickname from users where id = (SELECT "userId" FROM posts WHERE id = ($1))) as user_nickname from posts where id = ($1);`,
      [postId]
    );

    return findPost.rows[0];
  }
}

export const postModel = new PostModel();
