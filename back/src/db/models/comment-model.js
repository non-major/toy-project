import mongoose, { model } from "mongoose";
import { CommentSchema } from "../schemas/comment-schema.js";
import { postModel } from "./postModel.js";

const Comment = model("comments", CommentSchema);

export class CommentModel {
  // 댓글 추가
  async create(content, userId, postId) {
    const comment = new Comment({
      postId: postId,
      content: content,
      author: userId,
    });

    await postModel.addCommentId(postId, comment._id);
    await comment.save();

    return comment;
  }

// 댓글 조회 by PostId
  async findByPostId(postId) {
    return await Comment.find({ postId });
  }

  // 댓글 수정
  async update(commentId, editContent) {
    const comment = await Comment.findOneAndUpdate(
      { _id: commentId },
      { content: editContent },
      { returnOriginal: false }
    );

    return comment;
  }

  // 댓글 삭제
  async delete(commentId, postId) {
    await Comment.findByIdAndDelete(commentId);
    await postModel.deleteCommentId(postId, commentId);
    return commentId;
  }
}

const commentModel = new CommentModel();

export { commentModel };
