import { user, userToken, IUserModel } from "../interface";
import { userModel } from "../model/userModel";
import bcrypt from "bcrypt";

export class UserService {
  constructor(private userModel: IUserModel) {}

  async findAll(): Promise<user[]> {
    return await userModel.findAll();
  }

  async update(userInfo: userToken, toUpdate: user): Promise<user> {
    const { userId, userPassword, userNickname } = userInfo;
    const { password, nickname } = toUpdate;

    let user = await userModel.findById(userId);
    if (!user) {
      throw new Error("가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
    }
    const correctPasswordHash = user.password;

    //todo
    const isPasswordCorrect: boolean = await bcrypt.compare(
      userPassword,
      correctPasswordHash
    );

    if (isPasswordCorrect) {
      throw new Error(
        "현재 비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요."
      );
    }

    // if (password) {
    //   const newPassWordHash = await bcrypt.hash(password, 10);
    //   toUpdate.password = newPassWordHash;
    // }

    const newNickname = await userModel.findByNickname(userNickname);
    if (!newNickname) {
      throw new Error(
        "이 닉네임은 현재 사용중입니다.다른 닉네임을 입력해 주세요."
      );
    }

    toUpdate.nickname = nickname;

    user = await this.userModel.update(userId, toUpdate);

    return user;
  }
}

const userService = new UserService(userModel);
export { userService };
