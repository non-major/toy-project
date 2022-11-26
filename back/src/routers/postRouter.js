import {Router} from 'express';
import {postService} from '../services/postService.js';

const postRouter =  Router();

// 게시글 추가
postRouter.post('/post', async (req, res, next) => {
  // 미들웨어 
  const {nickname, title, content, image, comments} = {...req.body};
  const newData = {nickname, title, content, image, comments};

  const post = await postService.createPost(newData);

  res.status(201).json(post);
})

// 전체 게시글 조회
postRouter.get('/postList', async (req, res, next) => {
  const posts = await postService.getPosts();

  res.status(200).json(posts);
})


// 게시글 수정
postRouter.patch('/posts/:postId', async (req, res, next) => {
  const postId = req.params.postId;

  const {title, content, image} = {...req.body};
  
  const newData = {
    title, content, image
  };

  const updatedPost = await postService.updatePost(postId, newData);

  res.status(200).json(updatedPost);

})

export {postRouter};