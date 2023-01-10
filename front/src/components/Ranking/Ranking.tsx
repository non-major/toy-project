import React, { useState, useEffect } from "react";
import getUserRank from "../../api/getUserRank";
import { Rank } from "./Ranking.styles";

export interface RankingUser {
  _id: string;
  postCount: number;
  nickname: string;
}

const Ranking = () => {
  const [users, setUsers] = useState<RankingUser[]>([]);

  useEffect(() => {
    getUserRank(setUsers);
  }, []);

  return (
    <Rank>
      {users.map((user, idx) => {
        return (
          <div className="rank" key={user._id}>
            <span>{idx + 1}</span>
            <div>{user.nickname}</div>
          </div>
        );
      })}
    </Rank>
  );
};

export default Ranking;
