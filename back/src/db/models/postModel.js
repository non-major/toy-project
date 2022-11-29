import {model} from 'mongoose';
import {postSchema} from '../schemas/postSchema.js';
import { commentModel, CommentModel } from './comment-model.js';

const Post = model('posts', postSchema); // 스키마로부터 컴파일된 document 생성자

export class PostModel { 
  // 게시글 추가 document 생성
  async create(data){
    const {userId, title, content, image} = {...data};

    const createdPost = await Post.create({
      userId : userId,
      title : title,
      content : content,
      image : image,
    });
    return createdPost;
  }

  // 게시글 수정
  async update(postId, update){ 
    const filter = {postId : postId};
    const option = {returnOriginal : false};

    const updatedPost = await Post.findOneAndUpdate(filter, update, option);
    return updatedPost;
  }
  // 게시글 삭제
  async delete(postId){
    const filter = {postId : postId};

    const comments = (await Post.findOne({postId})).comments
    comments.forEach(x=>commentModel.delete(x));
    const deletedPost = await Post.deleteOne(filter);

    return deletedPost;
  }

  // 전체 게시글 조회
  async findAll() {
    const posts = await Post.find({}).populate({path : "userId", select:'nickname'});
    return posts;
  }

  // 전체 게시글 조회 (page nation)
  async findByPage(pageNumber, orderType=1) {
    const postsNumberPerPage = 9;
    const posts = await Post.find({}, ['postId','nickname', 'title', 'image'])
    .populate({path : "userId", select:'nickname'})
    .sort({"postId":orderType}).limit(postsNumberPerPage).skip((pageNumber-1)*postsNumberPerPage);
    const totalCount = posts.length;
    posts.push({totalCount});
    return posts;
  }

  // 상세 게시글 조회
  async findById(postId){
    const post = await Post.find({postId: postId})
    .populate({path: 'comments', populate:{path:'author', select:"nickname"}})
    .populate({path:'userId', select:'nickname'});

    return post;
  }

  // 내 게시글 조회 (page nation)
  async findByNickName(pageNumber, userId, orderType, conmmentOrder){
    const postsNumberPerPage = 9;
    const posts = await Post.find({userId : userId},['postId','userId', 'title', 'image', 'commentCount']).populate({path:"userId", select:"nickname"}).sort({"commentCount":conmmentOrder,"postId":orderType}).limit(postsNumberPerPage).skip((pageNumber-1)*postsNumberPerPage);
    const totalCount = posts.length;
    posts.push({totalCount});
    return posts;
  }
  // 월별 독서량 조회
  async findMonthlyReadings(nickname){
    const currentYear = new Date().getFullYear();
    const monthlyReadings = await Post.find({nickname : nickname}, ['createdAt']);
    console.log(monthlyReadings);
    
    const Months = {};
    for (let i=0;i<12;i++) Months[i+1] = 0;

    monthlyReadings.forEach(x=>Months[x.createdAt.getMonth()+1]++);
    console.log(Months);
    return Months;
  }

  // 댓글 추가
  async addCommentId(postId, commentId){

    await Post.findOneAndUpdate(
      {postId : postId},
      {$push: {
        comments : commentId
        }
      }
    )
    const count = (await Post.find({postId : postId}))[0].comments.length;

    await Post.findOneAndUpdate(
      {postId : postId},
      {
        commentCount : count
      }
    )
  }

  // 댓글 삭제
  async deleteCommentId(postId, commentId){
    await Post.findOneAndUpdate(
      {postId : postId},
      {$pull: {
          comments : commentId
        }
      }
    )

    const count = (await Post.find({postId : postId}))[0].comments.length;
    console.log(count);
    
    await Post.findOneAndUpdate(
      {postId : postId},
      {
        commentCount : count
      }
    )
  }
  // 상위 Top 5 유저 조회
};

const postModel = new PostModel();

export {postModel};