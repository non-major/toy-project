import { Router } from "express";
import { commentService } from "../services/comment-service.js";
import { loginRequired } from "../middlewares/login-required.js";
import nextError from "../utils/nextError.js";
const commentRouter = Router();

//  댓글 추가
commentRouter.post(
  "/comment",
  loginRequired,
  nextError(async (req, res, next) => {
    const userId1 = req.currentUserId;
    const { content } = req.body;

    await commentService.createComment(content, userId1);
    res.status(201).end();
  })
);

// 댓글 수정
commentRouter.patch(
  "/comment/:commentId",
  nextError(async (req, res, next) => {
    // TODO 미들웨어 (글쓴이 == 현재 유저) but, 프론트에서 아예 버튼이 안나오지 않을까?
    const { commentId } = req.params;
    const { content } = req.body;
    await commentService.updateComment(commentId, content);
    res.status(201).end();
  })
);

// 댓글 삭제
commentRouter.delete(
  "/comment/:commentId",
  nextError(async (req, res, next) => {
    // TODO 미들웨어 (글쓴이 == 현재 유저) but, 프론트에서 아예 버튼이 안나오지 않을까?
    const { commentId } = req.params;
    await commentService.deleteComment(commentId);
    res.status(201).end();
  })
);

export { commentRouter };
