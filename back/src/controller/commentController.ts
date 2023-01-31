import { comment } from "../interface";
import { commentService } from "../services";
import { AsyncRequestHandler } from "../types";

interface commentControllerInterface {
  findByPostId: AsyncRequestHandler;
  create: AsyncRequestHandler;
  update: AsyncRequestHandler;
  delete: AsyncRequestHandler;
}

export class CommentController implements commentControllerInterface {
  create: AsyncRequestHandler = async (req, res) => {
    const { postId } = req.params;
    const intPostId = parseInt(postId);
    const { userId, content, date } = req.body;
    const intUserId = parseInt(userId);
    const newDate = new Date(date);

    const postCommentInfo: comment = {
      postId: intPostId,
      userId: intUserId,
      content: content,
      date: newDate,
    };
    const commentPost = await commentService.create(postCommentInfo);
    res.json(commentPost);
  };

  findByPostId: AsyncRequestHandler = async (req, res) => {
    const { postId } = req.params;
    const intPostId = parseInt(postId);
    const { userId } = req.body;
    const intUserId = parseInt(userId);
    const comments = await commentService.findByPostId(intPostId);
    const result = comments.map((element) =>
      element.userId === intUserId
        ? { ...element, isAuthor: true }
        : { ...element, isAuthor: false }
    );

    res.json(result);
  };

  update: AsyncRequestHandler = async (req, res) => {
    const { userId, content } = req.body;
    const { commentId } = req.params;
    const intUserId = parseInt(userId);
    const id = parseInt(commentId);
    const toUpdate: comment = {
      content: content,
    };
    const validation = await commentService.findById(id);
    if (!(validation.userId === intUserId)) {
      throw new Error("댓글 작성자가 아닙니다.");
    }

    const commentUpdate = await commentService.update(id, toUpdate);
    res.json(commentUpdate);
  };

  delete: AsyncRequestHandler = async (req, res) => {
    const { commentId } = req.params;
    const { userId } = req.body;
    const id = parseInt(commentId);
    const intUserId = parseInt(userId);
    const validation = await commentService.findById(id);
    if (!(validation.userId === intUserId)) {
      throw new Error("댓글 작성자가 아닙니다.");
    }

    const commentDelete = commentService.delete(id);
    res.json(commentDelete);
  };
}

const commentController = new CommentController();
export { commentController };
