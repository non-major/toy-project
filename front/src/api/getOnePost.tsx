import React from "react";
import axios from "axios";

const getOnePost = async (id: string | undefined) => {
  const postData = await axios.get(`/api/posts/${id}`);
  return postData;
};

export default getOnePost;
