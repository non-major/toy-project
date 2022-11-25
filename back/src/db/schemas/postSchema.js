import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  author : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
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
      ref : "Comment",
    }
  ]},
  {
    collection : "Post",
    timestamps : true,
  }
);

export {postSchema};