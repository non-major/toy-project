import { model } from "mongoose";
import { CommentSchema } from "../schemas/comment-schema.js";

const Comment = model("comments", CommentSchema);

export class CommentModel {
  // 댓글 추가
  async create(content, userId) {
    const comment = new Comment({
      content: content,
      author: userId,
    });
    await comment.save();
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
    await Comment.findByIdAndDelete(commentId);
  }
}

const commentModel = new CommentModel();

export { commentModel };
