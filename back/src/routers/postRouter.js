import { Router } from "express";
import { postService } from "../services/postService.js";
import { userService } from "../services/user-service.js";
import { loginRequired } from "../middlewares/login-required.js";
import nextError from "../utils/nextError.js";

const postRouter = Router();

// 게시글 추가
postRouter.post(
  "/post/add",
  loginRequired,
  nextError(async (req, res, next) => {
    // 미들웨어
    const userId = req.currentUserId;
    const { title, content, image} = { ...req.body };
    const newData = { userId, title, content, image};

    const post = await postService.createPost(newData);

    res.status(201).json(post);
  })
);

// 전체 게시글 조회
postRouter.get(
  "/post/postList",
  nextError(async (req, res, next) => {
    const posts = await postService.getPosts();

    res.status(200).json(posts);
  })
);

// 전체 게시글 조회 (page nation)
postRouter.get(
  "/post/postList/:page",
  nextError(async (req, res, next) => {
    const page = req.params.page;
    const orderType = req.query.order === "desc" ? -1 : 1;

    const posts = await postService.getPostsByPage(page, orderType);

    res.status(200).json(posts);
  })
);

// 상세 게시글 조회
postRouter.get(
  "/post/postList/details/:postId",
  nextError(async (req, res, next) => {
    const postId = req.params.postId;

    const post = await postService.getPostData(postId);

    res.status(200).json(post);
  })
);

// 내 게시글 조회
postRouter.get(
  "/post/myPostList/:page",
  loginRequired,
  nextError(async (req, res, next) => {
    // const base64Payload = req.header('token').split('.')[1];
    // const payload = Buffer.from(base64Payload, 'base64');
    // const nickname = JSON.parse(payload.toString()).nickname;
    const pageNumber = req.params.page;

    const userId = req.currentUserId;

    const orderType = req.query.order === "desc" ? -1 : 1;
    const comment = req.query.comment === "desc" ? -1 : 1;

    const posts = await postService.getMyPosts(
      pageNumber,
      userId,
      orderType,
      comment
    );

    res.status(200).json(posts);
  })
);

// 게시글 수정
postRouter.patch(
  "/post/update/:postId",
  loginRequired,
  nextError(async (req, res, next) => {
    const postId = req.params.postId;

    const { title, content, image } = { ...req.body };

    const newData = {
      title,
      content,
      image,
    };

    const updatedPost = await postService.updatePost(postId, newData);

    res.status(200).json(updatedPost);
  })
);

// 게시글 삭제
postRouter.delete(
  "/post/delete/:postId",
  loginRequired,
  nextError(async (req, res, next) => {
    const postId = req.params.postId;
    
    const deletedPost = await postService.deletePost(postId);

    res.status(200).json(deletedPost);
  })
);

// 유저 월별 독서량
postRouter.get(
  "/post/chart",
  loginRequired,
  nextError(async (req, res, next) => {
    const userId = req.currentUserId;
    // const nickname = userService.getUserInfo(userId);

    const MonthlyReadings = await postService.getMonthlyReadings(userId);

    res.status(200).json(MonthlyReadings);
  })
);

export { postRouter };
