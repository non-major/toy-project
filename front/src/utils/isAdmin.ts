import { Buffer } from "buffer";

const isAdmin = () => {
  const token = sessionStorage.getItem("userToken");

  if (token) {
    const base64Payload: string = token.split(".")[1];
    const payload = Buffer.from(base64Payload, "base64");
    const data = JSON.parse(payload.toString());
    return data?.status === 1 ? true : false;
  }
  return false;
};

export default isAdmin;
