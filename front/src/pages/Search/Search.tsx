import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "react-js-pagination";
import ItemList from "../../components/ItemList/ItemList";
import CreateBtn from "../../components/CreateBtn/CreateBtn";
import { Division, Nav, Paging } from "./Search.styles";
import { useQuery } from "react-query";

const Search = () => {
  const [page, setPage] = useState(1);
  const [contents, setContents] = useState([]);
  const [dateSort, setDateSort] = useState("desc");
  const [commentSort, setCommentSort] = useState("");
  const [totalCount, setTotal] = useState(0);
  // const { data, isSuccess } = useQuery(
  //   ["contents", page, dateSort, commentSort],
  //   () => getData(all, page, dateSort, commentSort),
  // );

  /*헤더 네비바에서 비회원은 내 기록 보기 버튼이 노출되지 않지만 
  /mydiary 경로를 직접 입력하여 들어오는 경우 블락하고 로그인 페이지로 이동하는 조건문 */

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <Division>
        <p></p>
        <div className="line"></div>
      </Division>

      {/* {isSuccess && <ItemList contents={data.response} />} */}

      <Paging>
        <Pagination
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={9}
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

export default Search;
