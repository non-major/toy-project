import { instance } from "./axiosInstance";
import axios from "axios";

type CommentData = {
  content: string;
  date: string;
};

type PostCommentFn = {
  (id: string | undefined, body: CommentData): Promise<{
    data: object;
    response: { status: number };
  }>;
};

const postOneComment: PostCommentFn = async (id, body) => {
  if (body.content === "") {
    alert("댓글 내용을 입력해주세요.");
    return;
  }
  try {
    const { data } = await instance.post(`/api/comments/${id}`, {
      content: body.content,
      date: body.date,
    });
    return data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      alert(`로그인 한 사용자만 사용할 수 있는 기능입니다.`);
    }
    return err;
  }
};

export default postOneComment;
