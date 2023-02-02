import { Router } from "express";
import { asyncHandler } from "../utils/index";
import { userController } from "../controller";
import { loginRequired } from "../middlewares/loginRequired";
export const userRouter = Router();
userRouter.get("/", asyncHandler(userController.findAll));
userRouter.get("/myInfo", loginRequired, asyncHandler(userController.findUser));
userRouter.get(
  "/month/count",
  loginRequired,
  asyncHandler(userController.monthPostCount)
);

userRouter.get("/rank", asyncHandler(userController.userRank));
userRouter.patch("/update", loginRequired, asyncHandler(userController.update));
userRouter.patch(
  "/kakao/update",
  loginRequired,
  asyncHandler(userController.kakaoUserUpdate)
);
userRouter.delete(
  "/delete",
  loginRequired,
  asyncHandler(userController.delete)
);

//관리자 모드
userRouter.delete(
  "/admin/delete/:userId",
  loginRequired,
  asyncHandler(userController.adminUserDelete)
);
