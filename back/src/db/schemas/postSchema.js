import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
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
    collection : "Posts",
    timestamps : true,
  }
);

export {postSchema};