import { post, IPostModel } from "../interface";
import { postModel } from "../model/postModel";

export class PostService {
  constructor(private postModel: IPostModel) {}

  async create(postInfo: post): Promise<post> {
    return await postModel.create(postInfo);
  }

  async findPost(postId: number): Promise<post> {
    return await postModel.findPost(postId);
  }
}

const postService = new PostService(postModel);
export { postService };
