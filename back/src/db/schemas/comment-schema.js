import { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    postId : {
      type : Number,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    }
    // author: {
    //   type: String,
    //   required : true,
    // },
  },
  {
    collection: "comments",
    timestamps: true,
  }
);

export { CommentSchema };
