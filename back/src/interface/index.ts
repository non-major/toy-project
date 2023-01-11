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
}

export { user, userInfo, IGuestModel, IUserModel, post, IPostModel };
