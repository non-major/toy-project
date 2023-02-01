import { user, userInfo, IUserModel, rank, monthPostCount } from "../interface";
import { userModel } from "../model/userModel";
import bcrypt from "bcrypt";

export class UserService {
  constructor(private userModel: IUserModel) {}

  async findAll(): Promise<user[]> {
    return await userModel.findAll();
  }

  async findUser(id: number): Promise<user> {
    return await userModel.findById(id);
  }

  async update(userInfo: userInfo, toUpdate: user): Promise<user> {
    const { userId, currentPassword, userNickname } = userInfo;
    const { nickname } = toUpdate;

    let user = await userModel.findByPassword(userId);
    if (!user) {
      throw new Error("가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
    }
    const currentPasswordHash = user.password;

    const isPasswordCorrect: boolean = await bcrypt.compare(
      currentPassword,
      currentPasswordHash
    );

    if (!isPasswordCorrect) {
      throw new Error(
        "현재 비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요."
      );
    }

    // if (password) {
    //   const newPassWordHash = await bcrypt.hash(password, 10);
    //   toUpdate.password = newPassWordHash;
    // }

    const newNickname = await userModel.findByNickname(userNickname);

    if (newNickname) {
      throw new Error(
        "이 닉네임은 현재 사용중입니다.다른 닉네임을 입력해 주세요."
      );
    }

    toUpdate.nickname = nickname;

    user = await this.userModel.update(userId, toUpdate);

    return user;
  }

  async kakaoUserUpdate(userId: number, nickname: string): Promise<user> {
    const newNickname = await userModel.findByNickname(nickname);

    if (newNickname) {
      throw new Error(
        "이 닉네임은 현재 사용중입니다.다른 닉네임을 입력해 주세요."
      );
    }

    const user = await this.userModel.kakaoUserUpdate(userId, nickname);

    return user;
  }

  async delete(id: number): Promise<user[]> {
    const user = await userModel.findById(id);
    if (!user) {
      throw new Error("유저 정보가 없습니다.");
    }
    const deleteUser = await userModel.delete(id);

    return deleteUser;
  }

  async userRank(): Promise<rank[]> {
    return await userModel.rank();
  }

  async monthPostCount(userId: number): Promise<monthPostCount[]> {
    return await userModel.monthPostCount(userId);
  }
}

const userService = new UserService(userModel);
export { userService };
