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

  async findAllDesc(postId: number): Promise<MyPosts> {
    const findAll = await postModel.findAllDesc(postId);
    const findAllCount = await postModel.findAllCount();
    const result = {
      post: findAll,
      totalCount: findAllCount,
    };
    return result;
  }

  async findAllAsc(postId: number): Promise<MyPosts> {
    const findAll = await postModel.findAllAsc(postId);
    const findAllCount = await postModel.findAllCount();
    const result = {
      post: findAll,
      totalCount: findAllCount,
    };
    return result;
  }

  async searchPost(search: string, page: number): Promise<MyPosts> {
    const findAll = await postModel.searchPost(search, page);
    const searchPost = await postModel.searchPostCount(search);
    const result = {
      post: findAll,
      totalCount: searchPost,
    };
    return result;
  }

  async findAllCommentCount(): Promise<MyPosts> {
    const findAll = await postModel.findAllCommentCount();
    const findAllCount = await postModel.findAllCount();
    const result = {
      post: findAll,
      totalCount: findAllCount,
    };
    return result;
  }

  async findMyPostsDesc(userId: number, postId: number): Promise<MyPosts> {
    const myPosts = await postModel.findMyPostsDesc(userId, postId);
    const totalCount = await postModel.findMyPostsCount(userId);
    const result: MyPosts = {
      MyPosts: myPosts,
      totalCount: totalCount,
    };
    return result;
  }

  async findMyPostsAsc(userId: number, postId: number): Promise<MyPosts> {
    const myPosts = await postModel.findMyPostsAsc(userId, postId);
    const totalCount = await postModel.findMyPostsCount(userId);
    const result: MyPosts = {
      MyPosts: myPosts,
      totalCount: totalCount,
    };
    return result;
  }

  async findMyPostsCommentCount(
    userId: number,
    postId: number
  ): Promise<MyPosts> {
    const myPosts = await postModel.findMyPostsCommentCount(userId, postId);
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
