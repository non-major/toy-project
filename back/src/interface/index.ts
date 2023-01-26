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
  userId: number;
  title: string;
  content: string;
  image?: string;
  commentCount?: number;
  user_nickname?: string;
}

interface comment {
  postId?: number;
  userId?: number;
  content: string;
  date?: Date;
}

interface report {
  postId: number;
  userId: number;
  type: number;
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
}

interface IPostModel {
  create(postInfo: post): Promise<post>;
  findPost(postId: number): Promise<post>;
  findAll(): Promise<any>;
  findMyPosts(userId: number): Promise<post[]>;
  findMyPostsCount(userId: number): Promise<number>;
}

interface ICommentModel {
  create(comment: comment): Promise<comment>;
  findByPostId(postId: number): Promise<comment[]>;
  findById(id: number): Promise<comment>;
  update(id: number, toUpdate: comment): Promise<comment>;
  delete(id: number): Promise<comment[]>;
}

interface IReportModel {
  create(report: report): Promise<report>;
  findAll(): Promise<report[]>;
  delete(id: number): Promise<report>;
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
  comment,
  ICommentModel,
  report,
  IReportModel,
};
