import axios from "axios";

const getUserRank = async (): Promise<
  Array<{ nickname: string; post_count: number }>
> => {
  try {
    const response = await axios.get(`/api/users/rank`);
    return response.data;
  } catch (err) {
    alert(`문제가 발생했습니다. 다시 시도해 주세요.`);
    return [];
  }
};

export default getUserRank;
