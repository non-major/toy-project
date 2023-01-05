interface user {
  email: string;
  password: string;
  nickname: string;
}

interface IUserModel {
  create(user: user): Promise<user>;
}

export { user, IUserModel };
