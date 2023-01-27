import axios from "axios";
import { instance } from "./axiosInstance";

const getComments = async (id: string | undefined) => {
  const commentsData = await instance.get(`/api/comments/${id}`);
  return commentsData;
};

export default getComments;
