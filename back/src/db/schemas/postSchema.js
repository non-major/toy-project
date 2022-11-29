import mongoose from 'mongoose';
import {setAutoIncrementId} from '../../utils/autoIncrement.js';

const postSchema = new mongoose.Schema({
  postId : Number,
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users",
    required : true,
  },
  title : {
    type : String,
    required : true,
  },
  content : {
    type : String,
    required : true,
  },
  image : {
    type : String,
  },
  comments : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "comments",
  }],
  commentCount : {
    type : Number,
    default : 0,
  }
},
{
  collection : "posts",
  timestamps : true,
}
);

setAutoIncrementId(postSchema, mongoose, 'post', 'postId');

export {postSchema};