import { Router } from "express";
import { asyncHandler } from "../utils/index";
import passport = require("passport");
import { setUserToken } from "../utils/jwt";

export const authRouter = Router();

authRouter.get("/kakao", passport.authenticate("kakao"));

authRouter.get(
  "/kakao/login",
  passport.authenticate("kakao", {
    session: false,
  }),
  (req, res, next) => {
    res.json(setUserToken(res, req.user));
  }
);
