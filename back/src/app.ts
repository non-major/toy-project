import express from "express";
import cors from "cors";
import { config } from "./config";
import { pg } from "./db/database";
import { guestRouter, userRouter, postRouter } from "./routers";
import { endPoint } from "./constants";
import bodyParser from "body-parser";
import { loginRequired } from "./middlewares";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const openApiDocument = yaml.load("src/api/swagger.yaml");

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(openApiDocument, { explorer: true })
);

app.use(endPoint.guest, guestRouter);
app.use(endPoint.user, userRouter);
app.use(endPoint.post, postRouter);

pg.connect().then(() => {
  console.log(`DB connect`);
});

app.listen(config.host.port, () => {
  console.log(
    `정상적으로 서버를 시작하였습니다.http://localhost:${config.host.port}`
  );
});
