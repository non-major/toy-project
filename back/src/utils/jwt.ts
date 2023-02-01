import jwt, { Secret } from "jsonwebtoken";
import { config } from "../config";

export const setUserToken = (res: any, user: any) => {
  const accessToken = jwt.sign(
    {
      userId: user.id,
      email: user.email,
      status: user.status,
      kakaoid: user.kakaoid,
    },
    config.jwt.secretKey as Secret,
    {
      expiresIn: "23h",
    }
  );
  const refreshToken = jwt.sign(
    { userId: user.id, email: user.email, status: user.status },
    config.jwt.secretKey as Secret,
    {
      expiresIn: "14d",
    }
  );

  return { accessToken, refreshToken, role: user.status };
};
