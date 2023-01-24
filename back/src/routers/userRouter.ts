import { Router } from "express";
import { asyncHandler } from "../utils/index";
import { userController } from "../controller";
import { loginRequired } from "../middlewares/loginRequired";
export const userRouter = Router();
userRouter.get("/", asyncHandler(userController.findAll));
userRouter.get("/myInfo", loginRequired, asyncHandler(userController.findUser));
userRouter.get("/rank", asyncHandler(userController.userRank));
userRouter.patch("/update", loginRequired, asyncHandler(userController.update));
userRouter.delete(
  "/delete",
  loginRequired,
  asyncHandler(userController.delete)
);
