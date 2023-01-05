interface user {
  email: string;
  password: string;
  nickname: string;
  postCount?: number;
}

interface IuserModel {
  create(userInfo: user): Promise<user>;
  findByEmail(email: string): Promise<string>;
  findByNickname(nickname: string): Promise<user>;
  findById(userId: number): Promise<user>;
  findAll(): Promise<user[]>;
}

export { user, IuserModel };
