import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Ranking from "../components/Ranking";

const Home = () => {
  const [contents, setContents] = useState([]);

  const getData = async ({ page, count }) => {
    try {
      const response = await axios
        .get(`https://randomuser.me/api/?page=${page}&results=${count}`)
        .then((res) => {
          return res.data.results;
        });

      return setContents(response);
    } catch (err) {
      alert(`문제가 발생했습니다. 다시 시도해 주세요. ${err.message}`);
    }
  };

  useEffect(() => {
    getData({ page: 1, count: 6 });
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

      <ItemList className="itemList">
        {contents.map((content, idx) => {
          return (
            <div className="item" key={idx}>
              <span>@{content.name.last}</span>
              <Link to="/">
                <div className="img">
                  <img src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936438890.jpg" />
                </div>
                <div className="title">{content.email}</div>
              </Link>
            </div>
          );
        })}
      </ItemList>
      <Division2>
        <p>독서 왕 👑</p>
        <div className="line"></div>
      </Division2>
      <Ranking />
    </>
  );
};

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .item {
    width: 30%;
    height: 100%;
    overflow: hidden;
    float: left;
    margin: 40px 1.5% 0 1.5%;
  }

  .img {
    width: 100%;
    height: 20vw;
    margin: 5px 0 5px 0;
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    height: 45px;
    line-height: 22px;
    word-break: break-all;
  }
`;

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
