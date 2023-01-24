interface user {
  id?: number;
  email?: string;
  password: string;
  nickname?: string;
  status?: number;
}

interface userInfo {
  userId: number;
  currentPassword: string;
  userEmail?: string;
  userNickname: string;
  status?: number;
}

interface post {
  userId?: number;
  title: string;
  content: string;
  image?: string;
  commentCount?: number;
  user_nickname?: string;
}

interface rank {
  id: number;
  nickname: string;
  post_count: number;
}

interface IGuestModel {
  create(user: user): Promise<user>;
}

interface IUserModel {
  findAll(): Promise<user[]>;
  findByEmail(email: string): Promise<user>;
  findByNickname(nickname: string): Promise<user>;
  findById(id: number): Promise<user>;
  update(id: number, toUpdate: user): Promise<user>;
  delete(id: number): Promise<user[]>;
  rank(): Promise<rank[]>;
}

interface IPostModel {
  create(postInfo: post): Promise<post>;
  findPost(postId: number): Promise<post>;
  findAll(postId: number): Promise<any>;
  findMyPosts(userId: number, page: number): Promise<post[]>;
  findMyPostsCount(userId: number): Promise<number>;
  updatePost(id: number, postInfo: post): Promise<post>;
  delete(id: number, userId: number): Promise<number>;
}

interface MyPosts {
  MyPosts?: post[];
  totalCount: number;
}

export {
  user,
  userInfo,
  IGuestModel,
  IUserModel,
  post,
  IPostModel,
  MyPosts,
  rank,
};