import mongoose from "mongoose";
import dotenv from "dotenv";

const DB_URI = dotenv.config().parsed.DB_URI;

console.log(DB_URI);

try {
  mongoose.connect(process.env.DB_URI);
  mongoose.connection.once("open", () => {
    console.log("MongoDB is Connected");
  });
} catch (error) {
  console.error("mongoDB error");
  console.log(error);
}

export * from './models/postModel';