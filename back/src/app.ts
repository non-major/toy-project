import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/error-handler.js";
import {
  postRouter,
  userRouter,
  commentRouter,
  kakaoRouter,
} from "./routers/index";

const app = express();

// CORS 에러 방지
app.use(cors());

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());

// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.urlencoded({ extended: false }));

app.use("/api", postRouter);
app.use("/api", userRouter);
app.use("/api", commentRouter);
app.use("/api", kakaoRouter);
app.use(errorHandler);

export { app };
