import { Router } from "express";
import { commentService } from "../services/comment-service.js";
import { loginRequired } from "../middlewares/login-reqired.js";
import nextError from "../utils/nextError.js";import { loginRequired } from "../middlewares/login-required.js";

const commentRouter = Router();

//  댓글 추가
commentRouter.post("/comment/:postId/",loginRequired, nextError(async (req, res, next) => {
  // TODO 미들웨어에서 user 받아서 author로 넘기기
  // const userId = req.currentUserId; // 미들웨어에서 로그인된 유저의 oid 들고오기
  const userId = req.currentUserId;
  const postId = req.params.postId;
  const { content } = req.body;

  const result =await commentService.createComment(content, userId, postId);
  res.status(201).json(result);
}));

// 댓글 수정
commentRouter.patch("/comment/:commentId", nextError(async (req, res, next) => {
  // TODO 미들웨어 (글쓴이 == 현재 유저) but, 프론트에서 아예 버튼이 안나오지 않을까?
  const { commentId } = req.params;
  const { content } = req.body;
  const result = await commentService.updateComment(commentId, content);
  res.status(201).json(result);
}));

// 댓글 삭제
commentRouter.delete("/comment/:postId/:commentId", nextError(async (req, res, next) => {
  // TODO 미들웨어 (글쓴이 == 현재 유저) but, 프론트에서 아예 버튼이 안나오지 않을까?
  const { commentId } = req.params;
  const postId = req.params.postId;
  const result = await commentService.deleteComment(commentId, postId);
  res.status(201).json(result);
}));
export { commentRouter };
