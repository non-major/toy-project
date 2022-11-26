import {Router} from 'express';
import {postService} from '../services/postService.js';

const postRouter =  Router();

// 게시글 추가
postRouter.post('/', async (req, res, next) => {
  // 미들웨어 
  const {nickname, title, content, image, comments} = {...req.body};
  const newData = {nickname, title, content, image, comments};

  const post = await postService.createPost(newData);

  res.status(201).json(post);
})

export {postRouter};