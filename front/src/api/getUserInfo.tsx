import axios from "axios";

const getUsersInfo = async () => {
  const userToken = sessionStorage.getItem("userToken");
  try {
    const user = await axios.get(`/api/user/myInfo`, {
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return user;
  } catch (err) {
    alert(`${err.response.data.reason}`);
  }
};

export default getUsersInfo;
