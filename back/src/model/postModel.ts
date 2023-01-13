import { pg } from "../db/database";
import { post, IPostModel } from "../interface";

export class PostModel implements IPostModel {
  async create(postInfo: post): Promise<post> {
    const { userId, title, content, image } = postInfo;
    const newPost = await pg.query(
      //todo 현재시간 값 다르게 가져와짐
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
  async findPostId(id: number): Promise<post> {
    const findPostId = await pg.query(`select * from posts where id = ($1)`, [
      id,
    ]);
    return findPostId.rows[0];
  }

  async findAll(): Promise<any> {
    const findAll = await pg.query(
      `select * from posts order by id desc limit 9`
    );
    return findAll.rows;
  }

  async findMyPosts(userId: number, page: number): Promise<post[]> {
    const myPosts = await pg.query(
      `select * from posts where "userId" = ($1) order by id desc limit 9 offset (($2)-1)*9`,
      [userId, page]
    );
    return myPosts.rows;
  }

  async findMyPostsCount(userId: number): Promise<number> {
    const findCount = await pg.query(
      `select count(*) from posts where "userId" = ($1)`,
      [userId]
    );
    return findCount.rows[0];
  }

  async updatePost(id: number, postInfo: post): Promise<post> {
    const { title, content } = postInfo;
    return await pg
      .query(
        `update posts set title = ($1),content = ($2),date =CURRENT_TIMESTAMP  where id = ($3)`,
        [title, content, id]
      )
      .then(() => this.findPostId(id));
  }

  async delete(id: number, userId: number): Promise<number> {
    const deletePost = await pg.query(`DELETE FROM posts WHERE id = ($1)`, [
      id,
    ]);

    const postCountUpdate = await pg.query(
      `UPDATE users SET post_count =(post_count - 1)WHERE id=($1)`,
      [userId]
    );
    return deletePost.rowCount;
  }
}

export const postModel = new PostModel();
