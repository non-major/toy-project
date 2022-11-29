import { Router } from "express";
import { commentService } from "../services/comment-service.js";
import { loginRequired } from "../middlewares/login-required.js";

const commentRouter = Router();

//  댓글 추가
commentRouter.post("/comment/:postId/",loginRequired, async (req, res, next) => {
  // TODO 미들웨어에서 user 받아서 author로 넘기기
  // const base64Payload = req.header('token').split('.')[1];
  // const payload = Buffer.from(base64Payload, 'base64');
  // const nickname = JSON.parse(payload.toString()).nickname;

  const userId1 = req.currentUserId;
  console.log(userId1);
  const postId = req.params.postId;
  const { content } = req.body;

  const result =await commentService.createComment(content, userId1, postId);
  res.status(201).json(result);
});

// 댓글 수정
commentRouter.patch("/comment/:commentId", async (req, res, next) => {
  // TODO 미들웨어 (글쓴이 == 현재 유저) but, 프론트에서 아예 버튼이 안나오지 않을까?
  const { commentId } = req.params;
  const { content } = req.body;
  const result = await commentService.updateComment(commentId, content);
  res.status(201).json(result);
});

// 댓글 삭제
commentRouter.delete("/comment/:postId/:commentId", async (req, res, next) => {
  // TODO 미들웨어 (글쓴이 == 현재 유저) but, 프론트에서 아예 버튼이 안나오지 않을까?
  const { commentId } = req.params;
  const postId = req.params.postId;
  const result = await commentService.deleteComment(commentId, postId);
  res.status(201).json(result);
});
export { commentRouter };
