import { guestModel } from "../model";
import { user, IGuestModel } from "../interface";
import { userModel } from "../model/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config";

export class GuestService {
  constructor(private guestModel: IGuestModel) {}

  async create(user: user): Promise<user> {
    const { email, password, nickname } = user;

    // 중복확인
    const userEmail = await userModel.findByEmail(email);
    if (userEmail) {
      throw new Error(
        "이 이메일은 현재 사용중입니다.다른 이메일을 입력해 주세요."
      );
    }

    const userNickname = await userModel.findByNickname(nickname);
    if (userNickname) {
      throw new Error(
        "이 닉네임은 현재 사용중입니다.다른 닉네임을 입력해 주세요."
      );
    }

    //비밀번호 해쉬
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserInfo = { email, password: hashedPassword, nickname };
    return await guestModel.create(newUserInfo);
  }

  //로그인
  async getUserToken(loginInfo: user): Promise<string> {
    const { email, password } = loginInfo;
    const user = await userModel.findByEmail(email);
    if (!user) {
      throw new Error("가입되지 않은 이메일 입니다.");
    }

    const passwordHash: string = user.password;

    const isPasswordCorrect = await bcrypt.compare(password, passwordHash);

    //비밀번호
    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.다시 한번 확인해 주세요.");
    }

    //로그인 성공=>jwt 웹 토큰 생성
    const secretKey = config.jwt.secretKey || "secret-key";
    const token = jwt.sign(
      {
        userId: user.id,
        userEmail: user.email,
        nickname: user.nickname,
        status: user.status,
        kakaoId: user.kakaoId,
      },
      secretKey
    );

    return token;
  }
}

const guestService = new GuestService(guestModel);

export { guestService };
