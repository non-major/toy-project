import axios from "axios";

const getUserRank = async (setUsers) => {
  try {
    const response = await axios.get(`/api/readingRank`);

    return setUsers(response.data);
  } catch (err) {
    alert(`문제가 발생했습니다. 다시 시도해 주세요. ${err.message}`);
  }
};

export default getUserRank;
