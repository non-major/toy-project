import { pg } from "../db/database";
import { comment, ICommentModel } from "../interface";

export class CommentModel implements ICommentModel {
  // 댓글 생성
  async create(comment: comment): Promise<comment> {
    const { postId, userId, content } = comment;
    const newComment = await pg.query(
      `INSERT INTO comments ("postId", "userId", content) VALUES ($1,$2,$3)RETURNING*`,
      [postId, userId, content]
    );
    return newComment.rows[0];
  }

  // 댓글 찾기 (id -> 단일)
  async findById(id: number): Promise<comment> {
    const comments = await pg.query(`SELECT * FROM comments WHERE id = ($1)`, [
      id,
    ]);
    return comments.rows[0];
  }

  // 댓글 찾기 (게시물 -> 여러개)
  async findByPostId(postId: number): Promise<comment[]> {
    const comments = await pg.query(
      `SELECT * FROM comments WHERE "postId" = ($1)`,
      [postId]
    );
    return comments.rows;
  }

  // 댓글 수정
  async update(id: number, toUpdate: comment): Promise<comment> {
    const { content } = toUpdate;
    return await pg
      .query(`UPDATE comments SET content = ($1) WHERE id = ($2)`, [
        content,
        id,
      ])
      .then(() => this.findById(id));
  }

  // 댓글 삭제
  async delete(id: number): Promise<comment[]> {
    const deleteComment = await pg.query(
      `DELETE FROM comments WHERE id = ($1)`,
      [id]
    );
    return deleteComment.rows[0];
  }
}

export const commentModel = new CommentModel();
