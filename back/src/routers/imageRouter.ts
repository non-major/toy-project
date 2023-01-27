import { Router } from "express";
import axios from "axios";
import { asyncHandler } from "../utils/index";
export const imageRouter = Router();

const client_id = "qDqq5uXxUcmyhQaKrdfZ"; // 발급받은 CLIENT ID
const client_secret = "o2VSkqJDY8"; // 발급받은 CLIENT SECRET

function imageSearch(req: any, res: any, next: any) {
  const api_url =
    "https://openapi.naver.com/v1/search/book.json?query=" +
    encodeURI(req.query.query); // JSON 결과
  axios
    .get(api_url, {
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      },
    })
    .then((data) => {
      res.send(data.data.items);
    })
    .catch((err) => next(err));
}

imageRouter.get("/", imageSearch);
