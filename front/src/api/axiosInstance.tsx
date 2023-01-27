import axios from "axios";

export const instance = axios.create({
  headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` },
});
