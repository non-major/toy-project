import {model} from 'mongoose';
import {postSchema} from '../schemas/postSchema.js';

const Post = model('Post', postSchema); // 스키마로부터 컴파일된 document 생성자

export class PostModel { 
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
  async update(postId, update){ 
    const filter = {_id : postId};
    const option = {returnOriginal : false};

    const updatedPost = await Post.findOneAndUpdate(filter, update, option);
    return updatedPost;
  }
  // 게시글 삭제
  async delete(postId){
    const filter = {_id : postId};

    const deletedPost = await Post.deleteOne(filter);
    return deletedPost;
  }

  // 전체 게시글 조회
  async findAll() {
    const posts = await Post.find({});
    return posts;
  }

  // 전체 게시글 조회 (page nation)
  async findByPage(pageNumber, orderType=1) {
    const postsNumberPerPage = 9;
    const posts = await Post.find({}, ['nickname', 'title', 'image']).sort({"_id":orderType}).limit(postsNumberPerPage).skip((pageNumber-1)*postsNumberPerPage);
    return posts;
  }

  // 상세 게시글 조회
  async findById(postId){
    const post = await Post.findOne({_id: postId});
    return post;
  }

  // 내 게시글 조회 (page nation)
  async findByNickName(pageNumber, nickname, orderType=1){
    const postsNumberPerPage = 9;
    const posts = await Post.find({nickname : nickname}).sort({"_id":orderType}).limit(postsNumberPerPage).skip((pageNumber-1)*postsNumberPerPage);
    return posts;
  }
  // 월별 독서량 조회
  // async findMonthlyReadings(nickname){
  //   const currentYear = new Date().getFullYear();
  //   const monthlyReadings = await Post.find({nickname : nickname}, ['createdAt']).find({createdAt : {$eq : currentYear}});
  //   console.log(...monthlyReadings);

    
  //   return monthlyReadings;
  // }

  // 상위 Top 5 유저 조회
};

const postModel = new PostModel();

export {postModel};