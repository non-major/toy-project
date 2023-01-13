import { Request, Response, NextFunction } from "express";
import { postModel } from "../model";

export const checkPostUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const postId = parseInt(id);
  const postUserId = req.body.userId;
  const userId = parseInt(postUserId);

  try {
    const findPost = await postModel.findPost(postId);
    const isAuthor = userId === findPost.userId ? "true" : "false";
    if (isAuthor === "false") {
      res.status(400).json({ status: false, message: `작성자가 아닙니다.` });
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};
