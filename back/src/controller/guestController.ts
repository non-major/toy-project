import { user } from "../interface";
import { guestService } from "../services";
import { AsyncRequestHandler } from "../types";

interface guestControllerInterface {
  createUser: AsyncRequestHandler;
  userLogin: AsyncRequestHandler;
}

export class GuestController implements guestControllerInterface {
  createUser: AsyncRequestHandler = async (req, res) => {
    const { email, password, nickname } = req.body;

    const user: user = {
      email: email,
      password: password,
      nickname: nickname,
    };
    const createUser = await guestService.create(user);
    res.json(createUser);
  };

  userLogin: AsyncRequestHandler = async (req, res) => {
    const { email, password } = req.body;
    const userInfo: user = {
      email: email,
      password: password,
    };

    const userToken = await guestService.getUserToken(userInfo);

    res.status(200).json(userToken);
  };
}

const guestController = new GuestController();
export { guestController };
