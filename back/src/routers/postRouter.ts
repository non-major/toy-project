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
postRouter.get("/order/desc", asyncHandler(postController.findAllDesc));
postRouter.get("/order/asc", asyncHandler(postController.findAllAsc));
postRouter.get(
  "/order/comment",
  loginRequired,
  asyncHandler(postController.findAllCommentCount)
);
postRouter.get("/search/post", asyncHandler(postController.searchPost));

postRouter.get(
  "/myInfo/order/desc",
  loginRequired,
  asyncHandler(postController.findMyPostsDesc)
);

postRouter.get(
  "/myInfo/order/asc",
  loginRequired,
  asyncHandler(postController.findMyPostsAsc)
);

postRouter.get(
  "/myInfo/order/comment",
  loginRequired,
  asyncHandler(postController.findMyPostsCommentCount)
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
