import { instance } from "./axiosInstance";

const getOnePost = async (id: string | undefined) => {
  try {
    const postData = await instance.get(`/api/posts/${id}`);
    return postData;
  } catch (err) {
    console.log(err);
  }
};

export default getOnePost;
