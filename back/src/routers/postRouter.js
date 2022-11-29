import { Router } from "express";
import { postService } from "../services/postService.js";
import { loginRequired } from "../middlewares/login-required.js";

const postRouter = Router();

// 게시글 추가
postRouter.post("/post", loginRequired, async (req, res, next) => {
  // 미들웨어
  const userId = req.currentUserId;
  const {title, content, image, comments } = { ...req.body };
  const newData = { userId, title, content, image, comments };

  const post = await postService.createPost(newData);

  res.status(201).json(post);
});

// 전체 게시글 조회
postRouter.get("/postList", async (req, res, next) => {
  const posts = await postService.getPosts();

  res.status(200).json(posts);
});

// 전체 게시글 조회 (page nation)
postRouter.get("/postList/:page", async (req, res, next) => {
  const page = req.params.page;
  const orderType = req.query.orderType === "desc" ? -1 : 1;

  const posts = await postService.getPostsByPage(page, orderType);

  res.status(200).json(posts);
});

// 상세 게시글 조회
postRouter.get("/postList/post/:postId", async (req, res, next) => {
  const postId = req.params.postId;

  const post = await postService.getPostData(postId);

  res.status(200).json(post);
});

// 내 게시글 조회
postRouter.get(
  "/myPostList/:pageNumber",
  loginRequired,
  async (req, res, next) => {
    // const base64Payload = req.header('token').split('.')[1];
    // const payload = Buffer.from(base64Payload, 'base64');
    // const nickname = JSON.parse(payload.toString()).nickname;
    const pageNumber = req.params.pageNumber;

    const userId = req.currentUserId;

    const orderType = req.query.orderType === "desc" ? -1 : 1;
    const comment = req.query.comment === "desc" ? -1 : 1;

    const posts = await postService.getMyPosts(pageNumber, userId, orderType, comment);

    res.status(200).json(posts);
  }
);

// 게시글 수정
postRouter.patch("/posts/:postId", loginRequired, async (req, res, next) => {
  const postId = req.params.postId;

  const { title, content, image } = { ...req.body };

  const newData = {
    title,
    content,
    image,
  };

  const updatedPost = await postService.updatePost(postId, newData);

  res.status(200).json(updatedPost);
});

// 게시글 삭제
postRouter.delete("/posts/:postId", loginRequired, async (req, res, next) => {
  const postId = req.params.postId;

  const deletedPost = await postService.deletePost(postId);

  res.status(200).json(deletedPost);
});

// 유저 월별 독서량
postRouter.get("/mypage", loginRequired, async (req, res, next) => {
  const base64Payload = req.header('token').split('.')[1];
  const payload = Buffer.from(base64Payload, 'base64');
  const nickname = JSON.parse(payload.toString()).nickname;
 
  const MonthlyReadings = await postService.getMonthlyReadings(nickname);

  res.status(200).json(MonthlyReadings);

});

export { postRouter };
