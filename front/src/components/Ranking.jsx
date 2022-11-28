import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Ranking = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
          return res.data.slice(0, 5);
        });

      return setUsers(response);
    } catch (err) {
      alert(`문제가 발생했습니다. 다시 시도해 주세요. ${err.message}`);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Rank>
      {users.map((user, idx) => {
        return (
          <div className="rank">
            <span>{idx + 1}</span>
            <div>{user.company.name}</div>
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
