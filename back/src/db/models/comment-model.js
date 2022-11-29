import mongoose, { model } from "mongoose";
import { CommentSchema } from "../schemas/comment-schema.js";
import { postModel } from "./postModel.js";

const Comment = model("comments", CommentSchema);

export class CommentModel {
  // 댓글 CRUD
  // 댓글 작성
  // 댓글 조회??
  // 댓글 수정
  // 댓글 삭제

  // 미들웨어 추가필요함...! 삭제시 작성자 아니면 loginPage로!

  // 댓글 추가
  async create(content, userId, postId) {
    console.log("모델도착");

    const comment = new Comment({
      postId : postId,
      content: content,
      author: userId,
    });

    await postModel.addCommentId(postId, comment._id);

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
  async delete(commentId, postId) {
    console.log("삭제 들어옴");
    await Comment.findByIdAndDelete(commentId);
    await postModel.deleteCommentId(postId, commentId);
    console.log("댓글삭제완료");
  }
}

const commentModel = new CommentModel();

export { commentModel };
