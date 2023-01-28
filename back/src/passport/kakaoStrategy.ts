import passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
import { config } from "../config";
import { userModel } from "../model";

const kakaoConfig = {
  clientID: config.kakao.clientID,
  clientSecret: config.kakao.KAKAO_SECRET_KEY,
  callbackURL: config.kakao.callbackURL,
  scope: ["profile_nickname", "account_email"],
};

const kakao = new KakaoStrategy(
  kakaoConfig,
  async (
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any
  ) => {
    try {
      const profileId = profile.id;
      const exUser = await userModel.findByKakaoId(profileId);

      if (exUser) {
        done(null, exUser);
      } else {
        const newUser = await userModel.create({
          email: profile._json.kakao_account.email,
          nickname: profile.displayName,
          kakaoId: profile.id,
        });
        done(null, newUser);
      }
    } catch (error) {
      console.log(error);
      done(error);
    }
  }
);
export { kakao };
