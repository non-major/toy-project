import { Router } from "express";
import { asyncHandler } from "../utils/index";
import { guestController } from "../controller";

export const guestRouter = Router();

guestRouter.post("/register", asyncHandler(guestController.createUser));
guestRouter.post("/login", asyncHandler(guestController.userLogin));
