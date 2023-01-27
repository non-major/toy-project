import passport from "passport";
import { userModel } from "../model";
import { kakao } from "./kakaoStrategy";
module.exports = () => {
  passport.serializeUser((user: any, done) => {
    console.log(user);

    done(null, user.nickname);
  });

  passport.deserializeUser((nickname: any, done) => {
    done(null, nickname);
  });

  passport.use(kakao);
};
