import { instance } from "./axiosInstance";

type CommentData = {
  content: string;
  date: string;
};

type PostCommentFn = {
  (id: string, body: CommentData): object;
};

// const postOneComment = async (id<string>, <{content: string, date: string}>) => {
//   const commentData = await instance.post(`/api/posts/${id}`);
//   return commentData;
// };

// export default postOneComment;
