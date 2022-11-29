import { commentModel } from "../db/index.js";

export class CommentService {
  async createComment(content, userId, postId) {
    await commentModel.create(content, userId, postId);
  }

  async updateComment(commentId, editContent) {
    await commentModel.update(commentId, editContent);
  }

  async deleteComment(commentId) {
    await commentModel.delete(commentId);
  }
}

const commentService = new CommentService();

export { commentService };
