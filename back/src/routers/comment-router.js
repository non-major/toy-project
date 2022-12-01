import { Router } from "express";
import { commentService } from "../services/comment-service.js";
import { loginRequired } from "../middlewares/login-required.js";
import nextError from "../utils/nextError.js";
const commentRouter = Router();

//  댓글 추가
commentRouter.post(
  "/comment/add/:postId/",
  loginRequired,
  nextError(async (req, res, next) => {
    const userId = req.currentUserId;
    const postId = req.params.postId;
    const { content } = req.body;

    const result = await commentService.createComment(content, userId, postId);
    res.status(201).json(result);
  })
);

// 댓글조회 by PostId
commentRouter.get(
  "/comment/get/:postId/",
  nextError(async (req, res, next) => {
    const postId = req.params.postId;
    const result = await commentService.findCommentByPostId(postId);
    res.status(201).json(result);
  })
);

// 댓글 수정
commentRouter.patch(
  "/comment/update/:commentId",
  loginRequired,
  nextError(async (req, res, next) => {
    const { commentId } = req.params;
    const { content } = req.body;
    const result = await commentService.updateComment(commentId, content);
    res.status(201).json(result);
  })
);

// 댓글 삭제
commentRouter.delete(
  "/comment/:postId/:commentId",
  loginRequired,
  nextError(async (req, res, next) => {
    const { commentId } = req.params;
    const postId = req.params.postId;
    const result = await commentService.deleteComment(commentId, postId);
    res.status(201).json(result);
  })
);
export { commentRouter };
