import { post } from "../interface";
import { postService } from "../services";
import { AsyncRequestHandler } from "../types";

interface postControllerInterface {
  create: AsyncRequestHandler;
  findPost: AsyncRequestHandler;
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
      findPost: findPost,
      isAuthor: isAuthor,
    };

    res.json(post);
  };
}

const postController = new PostController();
export { postController };
