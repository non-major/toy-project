import { Router } from "express";
import axios from "axios";
import { config } from "../config";

export const imageRouter = Router();

function imageSearch(req: any, res: any, next: any) {
  const api_url =
    "https://openapi.naver.com/v1/search/book.json?query=" +
    encodeURI(req.query.query);
  axios
    .get(api_url, {
      headers: {
        "X-Naver-Client-Id": config.naverBook.clientID,
        "X-Naver-Client-Secret": config.naverBook.clientSecret,
      },
    })
    .then((data) => {
      res.send(data.data.items);
    })
    .catch((err) => next(err));
}

imageRouter.get("/", imageSearch);
