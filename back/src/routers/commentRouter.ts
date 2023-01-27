import { Router } from "express";
import { asyncHandler } from "../utils/index";
import { commentController } from "../controller";
import { loginRequired } from "../middlewares/loginRequired";
import { isAuthorRequired } from "../middlewares/loginRequired";

export const commentRouter = Router();

commentRouter.post(
  "/:postId",
  loginRequired,
  asyncHandler(commentController.create)
);
commentRouter.get(
  "/:postId",
  isAuthorRequired,
  asyncHandler(commentController.findByPostId)
);
commentRouter.patch(
  "/:commentId",
  loginRequired,
  asyncHandler(commentController.update)
);
commentRouter.delete(
  "/:commentId",
  loginRequired,
  asyncHandler(commentController.delete)
);
