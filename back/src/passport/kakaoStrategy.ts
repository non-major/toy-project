import passport from "passport";
import { Strategy } from "passport-kakao";
import { config } from "../config";
import { userModel } from "../model";

export const kakao = () => {
  passport.use(
    new Strategy(
      {
        clientID: config.kakao.clientID,
        callbackURL: config.kakao.callbackURL,
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log("kakao profile", profile);
        try {
          const profileId = profile.id;
          const id = parseInt(profileId);
          const exUser = await userModel.findById(id);
          if (exUser) {
            done(null, exUser);
          } else {
            const newUser = await userModel.create({
              email: profile._json && profile._json.kakao_account_email,
              nickname: profile.displayName,
            });
            done(null, newUser);
          }
        } catch (error) {
          console.log(error);
          done(error);
        }
      }
    )
  );
};
