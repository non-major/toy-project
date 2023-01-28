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

  async findAllDesc(page: number): Promise<MyPosts> {
    const findAll = await postModel.findAllDesc(page);
    const findAllCount = await postModel.findAllCount();
    const result = {
      post: findAll,
      totalCount: findAllCount,
    };
    return result;
  }

  async findAllAsc(page: number): Promise<MyPosts> {
    const findAll = await postModel.findAllAsc(page);
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

  async findAllCommentCount(page: number): Promise<MyPosts> {
    const findAll = await postModel.findAllCommentCount(page);
    const findAllCount = await postModel.findAllCount();
    const result = {
      post: findAll,
      totalCount: findAllCount,
    };
    return result;
  }

  async findMyPostsDesc(userId: number, page: number): Promise<MyPosts> {
    const myPosts = await postModel.findMyPostsDesc(userId, page);
    const totalCount = await postModel.findMyPostsCount(userId);
    const result: MyPosts = {
      post: myPosts,
      totalCount: totalCount,
    };
    return result;
  }

  async findMyPostsAsc(userId: number, page: number): Promise<MyPosts> {
    const myPosts = await postModel.findMyPostsAsc(userId, page);
    const totalCount = await postModel.findMyPostsCount(userId);
    const result: MyPosts = {
      post: myPosts,
      totalCount: totalCount,
    };
    return result;
  }

  async findMyPostsCommentCount(
    userId: number,
    page: number
  ): Promise<MyPosts> {
    const myPosts = await postModel.findMyPostsCommentCount(userId, page);
    const totalCount = await postModel.findMyPostsCount(userId);
    const result: MyPosts = {
      post: myPosts,
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
