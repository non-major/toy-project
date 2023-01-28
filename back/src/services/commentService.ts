import { comment, ICommentModel } from "../interface";
import { commentModel } from "../model/index";

export class CommentService {
  constructor(private commentModel: ICommentModel) {}

  async findByPostId(postId: number): Promise<comment[]> {
    return await commentModel.findByPostId(postId);
  }
  async findById(id: number): Promise<comment> {
    return await commentModel.findById(id);
  }
  async create(comment: comment): Promise<comment> {
    return await commentModel.create(comment);
  }
  async update(id: number, toUpdate: comment): Promise<comment> {
    return await commentModel.update(id, toUpdate);
  }
  async delete(id: number): Promise<comment[]> {
    return await commentModel.delete(id);
  }
}

const commentService = new CommentService(commentModel);
export { commentService };
