import { Request, Response, NextFunction } from "express";
import { postModel } from "../model";

export const checkPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const postId = parseInt(id);
  try {
    const findPost = await postModel.findPostId(postId);
    if (!findPost) {
      res.status(400).json({ status: false, message: `게시물이 없습니다.` });
    }
    next();
  } catch (err) {
    next(err);
  }
};
