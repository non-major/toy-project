import { Router } from "express";
import { userService } from "../services/user-service.js";
import {loginRequired} from "../middlewares/login-required.js"

const userRouter = Router();

//회원가입
userRouter.post("/register", async (req, res, next) => {
  try {
    const { email, password, nickname } = req.body;

    const newUser = await userService.addUser({
      email,
      password,
      nickname,
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

//로그인
userRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userToken = await userService.getUserToken({ email, password });

    res.status(200).json(userToken);
  } catch (error) {
    next(error);
  }
});

//정보수정
userRouter.patch("/users/:userId", loginRequired, async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { password, nickname } = req.body;

    const currentPassword = req.body.currentPassword;
    if (!currentPassword) {
      throw new Error("정보를 변경하려면,현재의 비밀번호가 필요합니다.");
    }

    const userInfoRequired = { userId, currentPassword };
    const toUpdate = {
      ...(nickname && { nickname }),
      ...(password && { password }),
    };

    const updatedUSerInfo = await userService.setUser(
      userInfoRequired,
      toUpdate
    );

    res.status(200).json(updatedUSerInfo);
  } catch (error) {
    next(error);
  }
});

export { userRouter };
