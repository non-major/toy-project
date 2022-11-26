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

  // 게시글 전체 조회
  async getPosts() {
    const posts = await this.postModel.findAll();

    return posts;
  }

  // 게시글 내용 가져오기
  // async getPostData(postId){
  //   const post = await this.postModel.findById(postId);

  //   if (!post) throw new Error('해당 id의 게시물이 없습니다.');
  //   return post;
  // }

  // 게시글 수정
  async updatePost(postId, newData){

    const updatedPost = await this.postModel.update(
      postId, newData
    );
    return updatedPost;
  }

  // 게시글 삭제
  async deletePost(postId){
    const deletedPost = await this.postModel.delete(postId);

    return deletedPost;
  }
}

const postService = new PostService(postModel);

export {postService};