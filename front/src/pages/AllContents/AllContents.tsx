import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "react-js-pagination";
import getData from "../../api/getContents";
import ItemList from "../../components/ItemList/ItemList";
import SortNav from "../../components/SortNav";
import CreateBtn from "../../components/CreateBtn/CreateBtn";
import { Division, Nav, Paging } from "./AllContents.styles";

const AllContents = () => {
  const [page, setPage] = useState(1);
  const [contents, setContents] = useState([]);
  const [dateSort, setDateSort] = useState("desc");
  const [commentSort, setCommentSort] = useState("");
  const [totalCount, setTotal] = useState(0);
  const location = useLocation();
  const all = location.pathname === "/all" || location.pathname === "/";

  /*헤더 네비바에서 비회원은 내 기록 보기 버튼이 노출되지 않지만 
  /mydiary 경로를 직접 입력하여 들어오는 경우 블락하고 로그인 페이지로 이동하는 조건문 */
  if (
    location.pathname === "/mydiary" &&
    !sessionStorage.getItem("userToken")
  ) {
    window.location.href = "/login";
  }

  useEffect(() => {
    getData(all, page, dateSort, commentSort).then((res) => {
      if (res?.response.length === 0) {
        setTotal(0);
        return;
      } else {
        setContents(res?.response);
        setTotal(res?.totalCount);
      }
    });
  }, [all, page, dateSort, commentSort]);

  const handlePageChange = (page: number) => {
    setPage(page);
    getData(all, page, dateSort, commentSort).then((res) => {
      if (res?.response.length === 0) {
        setTotal(0);
        return;
      } else {
        setContents(res?.response);
        setTotal(res?.totalCount);
      }
    });
  };

  return (
    <>
      <Division>
        <p>{all ? "전체 기록 보기" : "내 기록 보기"}</p>
        <div className="line"></div>
      </Division>

      <Nav>
        <SortNav
          all={all}
          setDateSort={setDateSort}
          setCommentSort={setCommentSort}
        />
      </Nav>

      <ItemList contents={contents} />

      <Paging>
        <Pagination
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={totalCount}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </Paging>
      <CreateBtn />
    </>
  );
};

export default AllContents;
