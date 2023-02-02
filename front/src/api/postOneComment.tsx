import { instance } from "./axiosInstance";
import axios from "axios";
import { redirect } from "react-router-dom";

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
  if (!sessionStorage.getItem("userToken")) {
    alert("로그인 한 사용자만 댓글을 작성할 수 있습니다.");
    window.scrollTo(0, 0);
    return;
  }

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
    return err;
  }
};

export default postOneComment;
