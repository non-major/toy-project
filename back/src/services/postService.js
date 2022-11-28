import {postModel} from '../db/index.js';

export class PostService { // 기능 로직 구현? 
  constructor(postModel) {
    this.postModel = postModel;
  }
  // 게시글 작성
  async createPost(data){
    const {nickname, title, content, image, comments} = {...data};
    const newData = {nickname, title, content, image, comments};

    const newPost = await this.postModel.create(newData);
    return newPost;
  }
}

const postService = new PostService(postModel);

export {postService};