import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Pagination from "react-js-pagination";

// axios 경로 수정
// pagination param 수정
// fetchUser 컴포넌트로 빼기?
// 각 아이템에 link to 넣기
// nav onClick 구현
// 전체 기록 보기 > 내 기록 보기 세션스토리지로 체크?

const AllContents = () => {
  const [page, setPage] = useState(1);
  const [contents, setContents] = useState([]);

  const fetchUsers = async ({ page, count }) => {
    try {
      const response = await axios
        .get(`https://randomuser.me/api/?page=${page}&results=${count}`)
        .then((res) => {
          return res.data.results.slice(0, 9);
        });

      return setContents(response);
    } catch (err) {
      alert(`문제가 발생했습니다. 다시 시도해 주세요. ${err.message}`);
    }
  };

  useEffect(() => {
    fetchUsers({ page: 1, count: 9 });
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
    fetchUsers({ page, count: 9 });
  };

  return (
    <>
      <Division>
        <p>전체 기록 보기</p>
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

      <ItemList className="itemList">
        {contents.map((content, idx) => {
          return (
            <div className="item" key={idx}>
              <span>@{content.name.last}</span>
              <a>
                <div className="img">
                  <img src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936438890.jpg" />
                </div>
                <div className="title">{content.email}</div>
              </a>
            </div>
          );
        })}
      </ItemList>

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

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .item {
    width: 30%;
    float: left;
    margin: 40px 1.5% 0 1.5%;
  }

  .img {
    width: 100%;
    height: 320px;
    margin: 5px 0 5px 0;
  }

  .img img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }

  .title {
    height: 45px;
    line-height: 22px;
    word-break: break-all;
  }
`;

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
