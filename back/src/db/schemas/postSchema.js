import mongoose from 'mongoose';
import {setAutoIncrementId} from '../../utils/autoIncrement.js';

const postSchema = new mongoose.Schema({
  _id : Number,
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
  comments : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "comments",
    }
  ]
  },
  {
    collection : "posts",
    timestamps : true,
    _id : false,
  }
);

setAutoIncrementId(postSchema, mongoose, 'post', '_id');

export {postSchema};