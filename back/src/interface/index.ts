interface user {
  id?: number;
  email?: string;
  password: string;
  nickname?: string;
}

interface userToken {
  userId: number;
  userEmail?: string;
  userPassword: string;
  userNickname: string;
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
}

export { user, userToken, IGuestModel, IUserModel };
