import { Schema } from "mongoose";

const KakaoSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    snsId: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
  },
  {
    collection: "kakao",
    timestamps: true,
  }
);

export { KakaoSchema };
