import mongoose, { Schema } from "mongoose";
import { user } from "../../interface";

const UserSchema = new Schema<user>(
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
