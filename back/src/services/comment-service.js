import { commentModel } from "../db/index.js";

export class CommentService {
  async createComment(content, userId) {
    await commentModel.create(content, userId);
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
