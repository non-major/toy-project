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

  async findAll(): Promise<post> {
    return await postModel.findAll();
  }

  //   async findMyPosts(userId: number): Promise<any> {
  //     const myPosts = await postModel.findMyPosts(userId);
  //     // const totalCount = await postModel.findMyPostsCount(userId);
  //     // const result = {
  //     //   myPosts: myPosts,
  //     //   totalCount: totalCount,
  //     // };
  //     // return result;
  //     return myPosts;
  //   }

  async findMyPosts(userId: number): Promise<post[]> {
    return await postModel.findMyPosts(userId);
  }
}

const postService = new PostService(postModel);
export { postService };
