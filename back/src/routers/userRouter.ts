import { Router } from "express";
import { asyncHandler } from "../utils/index";
import { userController } from "../controller";

export const userRouter = Router();

userRouter.post("/register", asyncHandler(userController.createUser));
