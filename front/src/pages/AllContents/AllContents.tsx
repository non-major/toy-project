import { useState } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "react-js-pagination";
import getData from "../../api/getContents";
import ItemList from "../../components/ItemList/ItemList";
import SortNav from "../../components/SortNav";
import CreateBtn from "../../components/CreateBtn/CreateBtn";
import { Division, Nav, Paging } from "./AllContents.styles";
import { useQuery } from "react-query";

const AllContents = () => {
  const [page, setPage] = useState(1);
  const [dateSort, setDateSort] = useState("desc");
  const [commentSort, setCommentSort] = useState("");
  const location = useLocation();
  const all = location.pathname === "/all" || location.pathname === "/";
  const { data, isSuccess } = useQuery(
    ["posts", all, page, dateSort, commentSort],
    () => getData(all, page, dateSort, commentSort),
  );

  /*헤더 네비바에서 비회원은 내 기록 보기 버튼이 노출되지 않지만 
  /mydiary 경로를 직접 입력하여 들어오는 경우 블락하고 로그인 페이지로 이동하는 조건문 */
  if (
    location.pathname === "/mydiary" &&
    !sessionStorage.getItem("userToken")
  ) {
    window.location.href = "/login";
  }

  const handlePageChange = (page: number) => {
    setPage(page);
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
          dateSort={dateSort}
          commentSort={commentSort}
          setDateSort={setDateSort}
          setCommentSort={setCommentSort}
        />
      </Nav>

      {isSuccess && <ItemList contents={data.response} />}

      <Paging>
        <Pagination
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={isSuccess ? data.totalCount : 9}
          pageRangeDisplayed={5}
          prevPageText={"<"}
          nextPageText={">"}
          firstPageText={"<<"}
          lastPageText={">>"}
          onChange={handlePageChange}
        />
      </Paging>
      <CreateBtn />
    </>
  );
};

export default AllContents;
