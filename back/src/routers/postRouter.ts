import { Router } from "express";
import { asyncHandler } from "../utils/index";
import { postController } from "../controller";
import { loginRequired } from "../middlewares/loginRequired";
import { isAuthorRequired } from "../middlewares/loginRequired";
import { checkPostUser } from "../middlewares";
import { checkPost } from "../middlewares/postHandler";
export const postRouter = Router();

postRouter.post("/", loginRequired, asyncHandler(postController.create));
postRouter.get(
  "/:id",
  isAuthorRequired,
  checkPost,
  asyncHandler(postController.findPost)
);
postRouter.get("/", asyncHandler(postController.findAll));
postRouter.get(
  "/my/posts",
  loginRequired,
  asyncHandler(postController.findMyPosts)
);
postRouter.patch(
  "/update/:id",
  loginRequired,
  checkPost,
  checkPostUser,
  asyncHandler(postController.update)
);
postRouter.delete(
  "/delete/:id",
  loginRequired,
  checkPost,
  checkPostUser,
  asyncHandler(postController.delete)
);
