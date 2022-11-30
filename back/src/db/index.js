import mongoose from "mongoose";
import dotenv from "dotenv";

const DB_URI = dotenv.config().parsed.DB_URI;
// const DB_URI ="mongodb://localhost:27017"

try {
  // mongoose.connect(process.env.DB_URI);
  mongoose.connect(process.env.DB_URI);
  mongoose.connection.once("open", () => {
    console.log("MongoDB is Connected");
  });
} catch (error) {
  console.error("mongoDB error");
  console.log(error);
}

export * from "./models/postModel.js";
export * from "./models/user-model.js";
export * from "./models/comment-model.js";
export * from "./models/kakaoStrategy.js";
