import { post } from "../interface";
import { postService } from "../services";
import { AsyncRequestHandler } from "../types";

interface postControllerInterface {
  create: AsyncRequestHandler;
  findPost: AsyncRequestHandler;
  findAllDesc: AsyncRequestHandler;
  findAllAsc: AsyncRequestHandler;
  findAllCommentCount: AsyncRequestHandler;
  searchPost: AsyncRequestHandler;
  findMyPostsDesc: AsyncRequestHandler;
  findMyPostsAsc: AsyncRequestHandler;
  findMyPostsCommentCount: AsyncRequestHandler;
  update: AsyncRequestHandler;
  delete: AsyncRequestHandler;
}
export class PostController implements postControllerInterface {
  create: AsyncRequestHandler = async (req, res) => {
    const { userId, title, content, image } = req.body;

    const postInfo: post = {
      userId: userId,
      title: title,
      content: content,
      image: image,
    };

    const post = await postService.create(postInfo);
    res.json(post);
  };

  findPost: AsyncRequestHandler = async (req, res) => {
    const id = req.params.id;
    const postId = parseInt(id);
    const postUserId = req.body.userId;
    const userId = parseInt(postUserId);

    const findPost = await postService.findPost(postId);
    const isAuthor = userId === findPost.userId ? "true" : "false";

    const post: {} = {
      post: findPost,
      isAuthor: isAuthor,
    };

    res.json(post);
  };

  findAllDesc: AsyncRequestHandler = async (req, res) => {
    const page = req.query.page as string;
    const postPage = parseInt(page);
    const findAll = await postService.findAllDesc(postPage);
    res.json(findAll);
  };

  findAllAsc: AsyncRequestHandler = async (req, res) => {
    const page = req.query.page as string;
    const postPage = parseInt(page);
    const findAll = await postService.findAllAsc(postPage);
    res.json(findAll);
  };

  findAllCommentCount: AsyncRequestHandler = async (req, res) => {
    const page = req.query.page as string;
    const postPage = parseInt(page);
    const findAll = await postService.findAllCommentCount(postPage);
    res.json(findAll);
  };

  searchPost: AsyncRequestHandler = async (req, res) => {
    const search = req.query.search as string;
    const page = req.query.page as string;
    const searchPostPage = parseInt(page);

    const searchPost = await postService.searchPost(search, searchPostPage);
    res.json(searchPost);
  };

  findMyPostsDesc: AsyncRequestHandler = async (req, res) => {
    const userId = req.body.userId;
    const page = req.query.page as string;
    const postPage = parseInt(page);

    const findMyPosts = await postService.findMyPostsDesc(userId, postPage);
    res.json(findMyPosts);
  };

  findMyPostsAsc: AsyncRequestHandler = async (req, res) => {
    const userId = req.body.userId;
    const page = req.query.page as string;
    const postPage = parseInt(page);

    const findMyPosts = await postService.findMyPostsAsc(userId, postPage);
    res.json(findMyPosts);
  };

  findMyPostsCommentCount: AsyncRequestHandler = async (req, res) => {
    const userId = req.body.userId;
    const page = req.query.page as string;
    const postPage = parseInt(page);

    const findMyPosts = await postService.findMyPostsCommentCount(
      userId,
      postPage
    );
    res.json(findMyPosts);
  };

  update: AsyncRequestHandler = async (req, res) => {
    const id = req.params.id;
    const postId = parseInt(id);
    const { title, content, image } = req.body;
    const postInfo: post = {
      title: title,
      content: content,
      image: image,
    };

    const updatePost = await postService.update(postId, postInfo);
    res.json(updatePost);
  };

  delete: AsyncRequestHandler = async (req, res) => {
    const id = req.params.id;
    const postId = parseInt(id);
    const userId = req.body.userId;

    const deletePost = await postService.deletePost(postId, userId);
    res.json(deletePost);
  };
}

const postController = new PostController();
export { postController };
