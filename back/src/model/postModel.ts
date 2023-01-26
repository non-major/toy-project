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

  // 최신순
  async findAllDesc(page: number): Promise<post[]> {
    const findAll = await pg.query(
      `select * from posts order by id desc limit 9 offset(($1)-1)*9`,
      [page]
    );
    return findAll.rows;
  }
  //오래된순
  async findAllAsc(page: number): Promise<post[]> {
    const findAll = await pg.query(
      `select * from posts order by id asc limit 9 offset(($1)-1)*9`,
      [page]
    );
    return findAll.rows;
  }
  //댓글 많은순
  async findAllCommentCount(page: number): Promise<post[]> {
    const findAll = await pg.query(
      `select * from posts order by comment_count desc limit 9 offset(($1)-1)*9`,
      [page]
    );
    return findAll.rows;
  }

  //검색 기능
  async searchPost(search: string, page: number): Promise<post[]> {
    const searchPost = await pg.query(
      `select * from posts where (title like '%'||$1||'%' or content like '%'||$1||'%') order by id desc limit 9 offset(($2)-1)*9`,
      [search, page]
    );
    return searchPost.rows;
  }

  async searchPostCount(search: string): Promise<number> {
    const searchPost = await pg.query(
      `select count(*) from posts where (title like '%'||$1||'%' or content like '%'||$1||'%')`,
      [search]
    );
    return searchPost.rows[0];
  }

  async findAllCount(): Promise<number> {
    const findAllCount = await pg.query(`select count(*) from posts`);
    return findAllCount.rows[0];
  }

  //todo postId 필요한지
  //내 게시글 보기 (최신순)
  async findMyPostsDesc(userId: number, page: number): Promise<post[]> {
    const myPosts = await pg.query(
      `select * from posts where "userId" = ($1) order by id desc limit 9 offset(($2)-1)*9`,
      [userId, page]
    );
    return myPosts.rows;
  }

  async findMyPostsAsc(userId: number, page: number): Promise<post[]> {
    const myPosts = await pg.query(
      `select * from posts where "userId" = ($1) order by id Asc limit 9 offset(($2)-1)*9`,
      [userId, page]
    );
    return myPosts.rows;
  }

  async findMyPostsCommentCount(userId: number, page: number): Promise<post[]> {
    const myPosts = await pg.query(
      `select * from posts where "userId" = ($1) order by comment_count desc limit 9 offset(($2)-1)*9 `,
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
    const { title, content, image } = postInfo;
    return await pg
      .query(
        `update posts set title = ($1),content = ($2),image = ($3),date =CURRENT_TIMESTAMP  where id = ($4)`,
        [title, content, image, id]
      )
      .then(() => this.findPostId(id));
  }

  async delete(id: number, userId: number): Promise<number> {
    const deletePost = await pg.query(`DELETE FROM posts WHERE id = ($1)`, [
      id,
    ]);

    return deletePost.rowCount;
  }
}

export const postModel = new PostModel();
