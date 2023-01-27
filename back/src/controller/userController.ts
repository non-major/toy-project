import { userInfo, user } from "../interface";
import { userService } from "../services";
import { AsyncRequestHandler } from "../types";

interface userControllerInterface {
  findAll: AsyncRequestHandler;
  findUser: AsyncRequestHandler;
  update: AsyncRequestHandler;
  delete: AsyncRequestHandler;
  userRank: AsyncRequestHandler;
  monthPostCount: AsyncRequestHandler;
}

export class UserController implements userControllerInterface {
  findAll: AsyncRequestHandler = async (req, res) => {
    const users = await userService.findAll();
    res.json(users);
  };

  findUser: AsyncRequestHandler = async (req, res) => {
    const userId = req.body.userId;
    const user = await userService.findUser(userId);

    res.json(user);
  };

  update: AsyncRequestHandler = async (req, res) => {
    const { userId, userNickname, currentPassword, password, nickname } =
      req.body;

    const userInfo: userInfo = {
      userId: userId,
      currentPassword: currentPassword,
      userNickname: userNickname,
    };

    if (!currentPassword) {
      throw new Error("정보를 변경하려면,현재의 비밀번호가 필요합니다.");
    }

    const toUpdate: user = {
      password: password,
      nickname: nickname,
    };

    const userUpdate = await userService.update(userInfo, toUpdate);
    res.json(userUpdate);
  };

  delete: AsyncRequestHandler = async (req, res) => {
    const id = req.body.userId;
    const userDelete = userService.delete(id);
    res.json(userDelete);
  };

  userRank: AsyncRequestHandler = async (req, res) => {
    const userRank = await userService.userRank();

    res.json(userRank);
  };

  monthPostCount: AsyncRequestHandler = async (req, res) => {
    const id = req.body.userId;
    const monthPostCount = await userService.monthPostCount(id);
    res.json(monthPostCount);
  };
}

const userController = new UserController();
export { userController };
