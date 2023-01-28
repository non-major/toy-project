import { Router } from "express";
import { asyncHandler } from "../utils/index";
import { reportController } from "../controller";
import { loginRequired } from "../middlewares/loginRequired";
import { isAuthorRequired } from "../middlewares/loginRequired";

export const reportRouter = Router();

reportRouter.post(
  "/:postId",
  loginRequired,
  asyncHandler(reportController.create)
);

// 관리자모드
reportRouter.get(
  "/reportedList",
  isAuthorRequired,
  asyncHandler(reportController.findReportedPosts)
);

// 관리자모드
reportRouter.get(
  "/:postId",
  isAuthorRequired,
  asyncHandler(reportController.findByPostId)
);

// 관리자모드
reportRouter.delete(
  "/:postId",
  isAuthorRequired,
  asyncHandler(reportController.delete)
);
