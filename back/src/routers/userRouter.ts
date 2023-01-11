import { Router } from "express";
import { asyncHandler } from "../utils/index";
import { userController } from "../controller";

export const userRouter = Router();
userRouter.get("/", asyncHandler(userController.findAll));
userRouter.patch("/update", asyncHandler(userController.update));
userRouter.delete("/delete", asyncHandler(userController.delete));
