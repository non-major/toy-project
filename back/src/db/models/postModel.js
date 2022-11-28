import {model} from 'mongoose';
import {postSchema} from '../schemas/postSchema.js';

const Post = model('Post', postSchema); // 스키마로부터 컴파일된 document 생성자

export class PostModel { // collection 작업 구현이라면?
  // 게시글 추가 document 생성
  async create(data){
    const {nickname, title, content, image, comments} = {...data};

    const createdPost = await Post.create({
      nickname : nickname,
      title : title,
      content : content,
      image : image,
      comments : comments,
    });
    return createdPost;
  }
  // 게시글 수정
  async update({email, update}){
    const filter = {email : email};
    const option = {returnOriginal : false};

    const updatedPost = await Post.findOneAndUpdate(filter, update, option);
    return updatedPost;
  }
  // 게시글 삭제

  // 게시글 전체 조회 (최신순)

  // 상세 게시글 조회

  // 내 게시글 조회
};

const postModel = new PostModel();

export {postModel};