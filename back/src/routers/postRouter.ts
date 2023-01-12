import { Router } from "express";
import { asyncHandler } from "../utils/index";
import { postController } from "../controller";
import { loginRequired } from "../middlewares/loginRequired";
import { isAuthorRequired } from "../middlewares/loginRequired";

export const postRouter = Router();

postRouter.post("/", loginRequired, asyncHandler(postController.create));
postRouter.get("/:id", isAuthorRequired, asyncHandler(postController.findPost));
postRouter.get("/", asyncHandler(postController.findAll));
postRouter.get(
  "/myPosts",
  loginRequired,
  asyncHandler(postController.findMyPosts)
);
