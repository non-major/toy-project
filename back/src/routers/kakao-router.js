import { Router } from "express";
import { kakaoLogin } from "../db/models/kakaoStrategy.js";
import passport from "passport";
const kakaoRouter = Router();

kakaoRouter.get(
  "/auth/kakao",
  passport.authenticate("kakao", {
    failureRedirect: "#!/login",
  })
  //   users.signin
);

kakaoRouter.get(
  "/oauth",
  passport.authenticate("kakao", {
    failureRedirect: "#!/login",
  })
  //   users.authCallback
);

export { kakaoRouter };
