import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils";
import { config } from "../config";
import jwt from "jsonwebtoken";

export function loginRequired(req: Request, res: Response, next: NextFunction) {
  const userToken = req.headers.authorization?.split(" ")[1];

  if (!userToken || userToken === "null" || userToken === "undefined") {
    console.log("Authorization 토큰 없음");
    errorResponse(
      res,
      "FORBIDDEN",
      "로그인한 유저만 사용할 수 있는 서비스입니다.."
    );

    return;
  }

  try {
    const secretKey = config.jwt.secretKey || "secret-key";
    const jwtDecoded = jwt.verify(userToken, secretKey);
    const userId = (<{ userId: number }>jwtDecoded).userId;
    const userEmail = (<{ userEmail: string }>jwtDecoded).userEmail;
    const status = (<{ status: number }>jwtDecoded).status;
    const userNickname = (<{ userNickname: string }>jwtDecoded).userNickname;
    const kakaoId = (<{ kakaoid: string }>jwtDecoded).kakaoid;
    req.body.userId = userId;
    req.body.userEmail = userEmail;
    req.body.userNickname = userNickname;
    req.body.status = status;
    req.body.kakaoId = kakaoId;

    next();
  } catch (error) {
    errorResponse(res, "FORBIDDEN", "정상적인 토큰이 아닙니다.");

    return;
  }
}

export function isAuthorRequired(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userToken = req.headers.authorization?.split(" ")[1];

  if (!userToken || userToken === "null" || userToken === "undefined") {
    return next();
  }

  try {
    const secretKey = config.jwt.secretKey || "secret-key";
    const jwtDecoded = jwt.verify(userToken, secretKey);
    const userId = (<{ userId: number }>jwtDecoded).userId;
    const userEmail = (<{ userEmail: string }>jwtDecoded).userEmail;
    const status = (<{ status: number }>jwtDecoded).status;
    const userNickname = (<{ userNickname: string }>jwtDecoded).userNickname;
    req.body.userId = userId;
    req.body.userEmail = userEmail;
    req.body.userNickname = userNickname;
    req.body.status = status;

    next();
  } catch (error) {
    errorResponse(res, "FORBIDDEN", "정상적인 토큰이 아닙니다.");

    return;
  }
}
