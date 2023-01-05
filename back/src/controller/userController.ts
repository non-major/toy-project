import { user } from "../interface";
import { userService } from "../services";
import { AsyncRequestHandler } from "../types";

interface userControllerInterface {
  createUser: AsyncRequestHandler;
}

export class UserController implements userControllerInterface {
  createUser: AsyncRequestHandler = async (req, res) => {
    const { email, password, nickname } = req.body;

    const user: user = {
      email: email,
      password: password,
      nickname: nickname,
    };
    const createUser = await userService.create(user);
    res.json(createUser);
  };
}

const userController = new UserController();
export { userController };
