import express from "express";
import cors from "cors";
import { config } from "./config";
import { pg } from "./db/database";
import {
  guestRouter,
  userRouter,
  postRouter,
  authRouter,
  imageRouter,
  commentRouter,
  reportRouter,
} from "./routers";
import { endPoint } from "./constants";
import bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";
import yaml from "yamljs";
import { swaggerUi } from "./swagger";
const app = express();

app.use(cors());
app.use(bodyParser.json());
require("./passport")();
const openApiDocument = yaml.load("src/api/swagger.yaml");

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(openApiDocument, { explorer: true })
);
app.use(endPoint.auth, authRouter);
app.use(endPoint.guest, guestRouter);
app.use(endPoint.user, userRouter);
app.use(endPoint.post, postRouter);
app.use(endPoint.image, imageRouter);
app.use(endPoint.comment, commentRouter);
app.use(endPoint.report, reportRouter);

pg.connect().then(() => {
  console.log(`DB connect`);
});

app.listen(config.host.port, () => {
  console.log(
    `정상적으로 서버를 시작하였습니다.http://localhost:${config.host.port}`
  );
});
