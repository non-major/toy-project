import mongoose from 'mongoose';
import {setAutoIncrementId} from '../../utils/autoIncrement.js';
import { CommentSchema } from './comment-schema.js';

const postSchema = new mongoose.Schema({
  postId : Number,
  nickname : {
    type : String,
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
  }]
},
{
  collection : "posts",
  timestamps : true,
}
);

setAutoIncrementId(postSchema, mongoose, 'post', 'postId');

export {postSchema};