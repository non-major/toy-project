import { instance } from "./axiosInstance";

type CommentData = {
  content: string;
  date: string;
};

type PostCommentFn = {
  (id: string | undefined, body: CommentData): Promise<{
    data: unknown;
    response: unknown;
  }>;
};

const postOneComment: PostCommentFn = async (id, body) => {
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
