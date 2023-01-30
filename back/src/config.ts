import dotenv from "dotenv";
dotenv.config();

export const config = {
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
  },
  host: {
    port: process.env.PORT,
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  },
  kakao: {
    clientID: process.env.KAKAO_ID as string,
    KAKAO_SECRET_KEY: process.env.KAKAO_SECRET_KEY,
    callbackURL: process.env.KAKAO_URL,
  },
  naverBook: {
    clientID: process.env.NAVER_CLIENT_ID,
    clientSecret: process.env.NAVER_CLIENT_SECRET,
  },
};
