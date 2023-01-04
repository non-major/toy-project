import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    postCount: {
      type: Number,
      default: 0,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

export { UserSchema };
