import express from "express";
import cors from "cors";
import { config } from "./config";
import { db } from "./db/database";
import { userRouter } from "./routers";
import { endPoint } from "./constants";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(endPoint.user, userRouter);
db.getConnection().then(() => console.log(`db연결`));

app.listen(config.host.port, () => {
  console.log(
    `정상적으로 서버를 시작하였습니다.http://localhost:${config.host.port}`
  );
});
