import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import getData from "../api/getContents";
import ItemList from "../components/ItemList";

// axios 경로 수정
// pagination param 수정
// nav onClick 구현
// 전체 기록 보기 > 내 기록 보기 세션스토리지로 체크?

const AllContents = () => {
  const [page, setPage] = useState(1);
  const [contents, setContents] = useState([]);
  const [all, setAll] = useState(true);
  const [sort, setSort] = useState("desc");
  const [commentSort, setCommentSort] = useState("desc");
  const location = useLocation();

  const setAllState = () => {
    return location.pathname === "/mydiary" ? setAll(false) : setAll(true);
  };

  if (
    location.pathname === "/mydiary" &&
    !sessionStorage.getItem("userToken")
  ) {
    window.location.href = "/login";
  }

  useEffect(() => {
    getData(1, 9, setContents);
    setAllState();
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
    getData(page, 9, setContents);
  };

  return (
    <>
      <Division>
        <p>{all ? "전체 기록 보기" : "내 기록 보기"}</p>
        <div className="line"></div>
      </Division>

      <Nav>
        <ul>
          <li className="point">최신순</li>
          <li>|</li>
          <li className="point">오래된 순</li>
          <li>|</li>
          <li className="point">댓글 많은 순</li>
        </ul>
      </Nav>

      <ItemList contents={contents} />

      <Paging>
        <Pagination
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={82}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </Paging>
    </>
  );
};

const Paging = styled.div`
  margin: 50px 0 50px 0;

  .pagination {
    display: flex;
    justify-content: center;
  }

  .pagination li {
    width: 30px;
  }

  .pagination li a {
    color: black;
    text-decoration: none;
  }

  .active {
    font-weight: bold;
  }
`;

const Division = styled.div`
  display: flex;
  width: 100%;
  height: 20px;

  p {
    margin-right: 10px;
  }

  .line {
    height: 8px;
    flex-grow: 1;
    border-bottom: 2px solid black;
  }
`;

const Nav = styled.nav`
  width: 100%;
  margin: 20px 0 10px 0;

  ul {
    display: flex;
    justify-content: flex-end;
  }

  ul li {
    cursor: default;
  }

  .point {
    cursor: pointer;
  }

  ul > li {
    margin-left: 10px;
  }
`;

export default AllContents;
