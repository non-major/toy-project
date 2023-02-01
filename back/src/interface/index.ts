interface user {
  id?: number;
  email?: string;
  password: string;
  nickname?: string;
  status?: number;
  kakaoId?: number;
}

interface kakaoUser {
  id?: number;
  email?: string;
  nickname: string;
  kakaoId: number;
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
  rank(): Promise<rank[]>;
  monthPostCount(userId: number): Promise<monthPostCount[]>;
  kakaoUserUpdate(userId: number, nickname: string): Promise<user>;
}

interface IPostModel {
  create(postInfo: post): Promise<post>;
  findPost(postId: number): Promise<post>;
  findAllDesc(page: number): Promise<post[]>;
  findAllAsc(page: number): Promise<post[]>;
  searchPost(search: string, page: number): Promise<post[]>;
  findAllCommentCount(page: number): Promise<post[]>;
  findMyPostsDesc(userId: number, page: number): Promise<post[]>;
  findMyPostsAsc(userId: number, page: number): Promise<post[]>;
  findMyPostsCommentCount(userId: number, page: number): Promise<post[]>;
  findMyPostsCount(userId: number): Promise<number>;
  updatePost(id: number, postInfo: post): Promise<post>;
  delete(id: number, userId: number): Promise<number>;
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
  findReportedPosts(): Promise<report[]>;
  findByPostId(postId: number): Promise<report[]>;
  delete(postId: number): Promise<report>;
}

interface MyPosts {
  post?: post[];
  totalCount: number;
}

interface monthPostCount {
  month: string;
  count: number;
}

interface rank {
  id: number;
  nickname: string;
  post_count: number;
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
  monthPostCount,
  kakaoUser,
  IReportModel,
  rank,
};
