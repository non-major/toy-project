import {postModel} from '../db';

class PostService { // 기능 로직 구현? 
  constructor(postModel) {
    this.postModel = postModel;
  }

  // 글쓰기
  
}

const postService = new PostService(postModel);

export {postService};