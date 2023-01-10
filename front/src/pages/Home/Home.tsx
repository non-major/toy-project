import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Ranking from "../../components/Ranking/Ranking";
import getData from "../../api/getContents";
import ItemList from "../../components/ItemList/ItemList";
import CreateBtn from "../../components/CreateBtn/CreateBtn";
import { Division, Division2 } from "./Home.styles";

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

export default Home;
