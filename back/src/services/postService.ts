import { post, IPostModel, MyPosts } from "../interface";
import { postModel } from "../model/postModel";

export class PostService {
  constructor(private postModel: IPostModel) {}

  async create(postInfo: post): Promise<post> {
    return await postModel.create(postInfo);
  }

  async findPost(postId: number): Promise<post> {
    return await postModel.findPost(postId);
  }

  async findAll(postId: number): Promise<MyPosts> {
    const findAll = await postModel.findAll(postId);
    const findAllCount = await postModel.findAllCount();
    const result = {
      post: findAll,
      totalCount: findAllCount,
    };
    return result;
  }

  async findMyPosts(userId: number, page: number): Promise<MyPosts> {
    const myPosts = await postModel.findMyPosts(userId, page);
    const totalCount = await postModel.findMyPostsCount(userId);
    const result: MyPosts = {
      MyPosts: myPosts,
      totalCount: totalCount,
    };
    return result;
  }

  async update(id: number, postInfo: post): Promise<post> {
    return await postModel.updatePost(id, postInfo);
  }

  async deletePost(id: number, userId: number): Promise<number> {
    return await postModel.delete(id, userId);
  }
}

const postService = new PostService(postModel);
export { postService };
