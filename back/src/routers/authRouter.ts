import { Router } from "express";
import { asyncHandler } from "../utils/index";
import { guestController } from "../controller";
import passport from "passport";

export const authRouter = Router();

authRouter.get("/kakao", passport.authenticate("kakao"));
authRouter.get(
  "/kakao/oauth",
  passport.authenticate("kakao", {
    failureRedirect: "/kakao",
  }),
  (req, res) => {
    res.redirect("/api/posts/order/desc");
  }
);
