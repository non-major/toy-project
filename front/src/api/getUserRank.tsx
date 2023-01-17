import axios from "axios";
import { RankingUser } from "../components/Ranking/Ranking";

const getUserRank = async (
  setUsers: React.Dispatch<React.SetStateAction<RankingUser[]>>,
) => {
  try {
    const response = await axios.get(`/api/user/rank`);

    return setUsers(response.data);
  } catch (err) {
    alert(`문제가 발생했습니다. 다시 시도해 주세요.`);
  }
};

export default getUserRank;
