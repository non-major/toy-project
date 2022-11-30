import { Router } from "express";
import { userService } from "../services/user-service.js";
import { loginRequired } from "../middlewares/login-required.js";
import nextError from "../utils/nextError.js";
const userRouter = Router();

//유저 조회
userRouter.get(
  "/user/:userId",
  nextError(async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const user = await userService.getUser(userId);
      res.json(user);
    } catch (error) {
      next(error);
    }
  })
);

// 유저 전체조회
userRouter.get(
  "/user",
  nextError(async (req, res, next) => {
    try {
      const users = await userService.getUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  })
);

//회원가입
userRouter.post(
  "/register",
  nextError(async (req, res, next) => {
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
  })
);

//로그인
userRouter.post(
  "/login",
  nextError(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const userToken = await userService.getUserToken({ email, password });

      res.status(200).json(userToken);
    } catch (error) {
      next(error);
    }
  })
);

//정보수정
userRouter.patch(
  "/users/:userId",
  loginRequired,
  nextError(async (req, res, next) => {
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
  })
);

userRouter.delete(
  "/users/:userId",
  loginRequired,
  nextError(async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const userDelete = await userService.deleteUser(userId);
      res.json(userDelete);
    } catch (error) {
      next(error);
    }
  })
);

// 독서왕 top 5 조회
userRouter.get("/readingRank", nextError(async (req, res, next)=>{
    const ranks = await userService.findTopFive();

    res.status(200).json(ranks);
  })
);

// 내 정보 조회
userRouter.get('/myInfo',loginRequired, nextError(async (req, res, next)=>{
    const userId = req.currentUserId;
    const user = await userService.getUserInfo(userId);
    res.status(200).json(user);
  })
)

export { userRouter };
