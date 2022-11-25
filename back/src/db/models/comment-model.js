import { model } from "mongoose";
import { CommentSchema } from "../schemas/comment-schema.js";

const Comment = model("comments", CommentSchema);

export class CommentModel {
  // 댓글 CRUD
  // 댓글 작성
  // 댓글 조회??
  // 댓글 수정
  // 댓글 삭제

  // 미들웨어 추가필요함...! 삭제시 작성자 아니면 loginPage로!

  // 댓글 추가
  async create(content, userId) {
    return Comment.create({
      content: content,
      author: { _id: userId },
    });
  }

  // 댓글 수정
  async update(commentId, editContent) {
    return Comment.findOneAndUpdate(
      { _id: commentId },
      { content: editContent },
      { returnOriginal: false }
    );
  }

  // 댓글 삭제
  async delete(commentId) {
    await Comment.deleteOne({ _id: commentId });
  }
}

const commentModel = new CommentModel();

export { commentModel };
