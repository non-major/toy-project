import axios from "axios";

const getUsersInfo = async () => {
  const userToken = sessionStorage.getItem("userToken");
  try {
    const user = await axios.get(`/api/myInfo`, {
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return user;
  } catch (err) {
    alert(`회원정보를 불러오지 못했습니다. 다시 시도해주세요. ${err.message}`);
  }
};

export default getUsersInfo;
