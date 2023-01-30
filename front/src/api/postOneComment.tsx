import { instance } from "./axiosInstance";

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
