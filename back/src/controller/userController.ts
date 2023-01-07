import { userToken, user } from "../interface";
import { userService } from "../services";
import { AsyncRequestHandler } from "../types";

interface userControllerInterface {
  findAll: AsyncRequestHandler;
  update: AsyncRequestHandler;
}

export class UserController implements userControllerInterface {
  findAll: AsyncRequestHandler = async (req, res) => {
    const users = await userService.findAll();
    res.json(users);
  };

  update: AsyncRequestHandler = async (req, res) => {
    const { userId, userPassword, userNickname, password, nickname } = req.body;

    const userToken: userToken = {
      userId: userId,
      userPassword: userPassword,
      userNickname: userNickname,
    };

    const user: user = {
      password: password,
      nickname: nickname,
    };

    const userUpdate = await userService.update(userToken, user);
    res.json(userUpdate);
  };
}

const userController = new UserController();
export { userController };
