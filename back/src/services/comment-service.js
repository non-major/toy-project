import { commentModel } from "../db/index.js";

export class CommentService {
  async createComment(content, userId, postId) {
    return await commentModel.create(content, userId, postId);
  }

  async updateComment(commentId, editContent) {
    return await commentModel.update(commentId, editContent);
  }

  async deleteComment(commentId, postId) {
    return await commentModel.delete(commentId, postId);
  }
}

const commentService = new CommentService();

export { commentService };
