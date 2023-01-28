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

  //http://localhost:3000/api/posts/search/post?search=es&page=1

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
