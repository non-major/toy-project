import { useQuery } from "react-query";
import getUserRank from "../../api/getUserRank";
import { Rank } from "./Ranking.styles";

const Ranking = () => {
  const { data: rank, isSuccess } = useQuery(["user", "posts"], () =>
    getUserRank(),
  );

  return (
    <Rank>
      {isSuccess &&
        rank.map((user, idx) => {
          return (
            <div className="rank" key={idx}>
              <span>{idx + 1}</span>
              <div>{user.nickname}</div>
            </div>
          );
        })}
    </Rank>
  );
};

export default Ranking;
