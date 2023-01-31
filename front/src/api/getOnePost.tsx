import { instance } from "./axiosInstance";

const getOnePost = async (id: string | undefined) => {
  const postData = await instance.get(`/api/posts/${id}`);
  return postData;
};

export default getOnePost;
