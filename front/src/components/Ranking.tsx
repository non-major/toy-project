import React, { useState, useEffect } from "react";
import getUserRank from "../api/getUserRank";
import styled from "styled-components";

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

const Rank = styled.div`
  width: 100%;
  text-align: center;
  cursor: default;
  margin-bottom: 50px;

  & :nth-child(1) span {
    color: gold;
  }

  & :nth-child(2) span {
    color: silver;
  }

  & :nth-child(3) span {
    color: brown;
  }

  .rank {
    display: flex;
    width: 80%;
    margin: 5px auto 5px auto;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid gray;
  }

  .rank span {
    width: 20%;
  }

  .rank div {
    width: 80%;
  }
`;

export default Ranking;
