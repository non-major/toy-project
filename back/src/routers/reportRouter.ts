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
reportRouter.get("/", isAuthorRequired, asyncHandler(reportController.findAll));

// 관리자모드
reportRouter.delete(
  "/:reportId",
  isAuthorRequired,
  asyncHandler(reportController.delete)
);
