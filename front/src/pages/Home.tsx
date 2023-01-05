import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Ranking from "../components/Ranking";
import getData from "../api/getContents";
import ItemList from "../components/ItemList";
import CreateBtn from "../components/CreateBtn";

const Home = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getData(true, 1, "desc", "").then((res) => {
      setContents(res?.response.slice(0, 6));
    });
  }, []);

  return (
    <>
      <Division>
        <p>전체 기록 보기</p>
        <div className="line"></div>
        <Link to="/all" className="more">
          {"more >"}
        </Link>
      </Division>

      <ItemList contents={contents} />

      <Division2>
        <p>독서 왕 👑</p>
        <div className="line"></div>
      </Division2>

      <Ranking />
      <CreateBtn />
    </>
  );
};

const Btn = styled.div``;

const Division = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin-top: 30px;
  cursor: default;

  p {
    margin-right: 10px;
  }

  .line {
    height: 8px;
    flex-grow: 1;
    border-bottom: 2px solid black;
  }

  .more {
    color: gray;
    font-size: 0.8rem;
    text-decoration: none;
    line-height: 16px;
    margin-left: 10px;
  }
`;

const Division2 = styled(Division)`
  margin-top: 60px;
`;

export default Home;
