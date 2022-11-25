import { Router } from "express";
import { commentService } from "../services/comment-service.js";

const commentRouter = Router();

//  댓글 추가
commentRouter.post("/", async (req, res, next) => {
  // TODO 미들웨어에서 user 받아서 author로 넘기기
  const userId = "908080890890";
  const content = req.body;
  await commentService.createComment(content, userId);
  res.status(201).end();
});

// 댓글 수정
commentRouter.patch("/:commentId", async (req, res, next) => {
  // TODO 미들웨어 (글쓴이 == 현재 유저) but, 프론트에서 아예 버튼이 안나오지 않을까?
  const { commentId } = req.params;
  const { content } = req.body;
  await commentService.updateComment(commentId, content);
  res.status(201).end();
});

// 댓글 삭제
commentRouter.delete("/:commentId", async (req, res, next) => {
  // TODO 미들웨어 (글쓴이 == 현재 유저) but, 프론트에서 아예 버튼이 안나오지 않을까?
  const { commentId } = req.params;
  await commentService.deleteComment(commentId);
  res.status(201).end();
});
export { commentRouter };
