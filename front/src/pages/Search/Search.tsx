import { useState } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "react-js-pagination";
import ItemList from "../../components/ItemList/ItemList";
import CreateBtn from "../../components/CreateBtn/CreateBtn";
import { Division, Paging } from "./Search.styles";
import { useQuery } from "react-query";
import getSearch from "../../api/getSearch";

const Search = () => {
  const [page, setPage] = useState(1);
  const location = decodeURIComponent(useLocation().pathname.split("/")[2]);
  const { data, isSuccess } = useQuery([page, location], () =>
    getSearch(page, location),
  );

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <Division>
        <p>{`'${location}' 검색 결과`}</p>
        <div className="line"></div>
      </Division>

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

export default Search;
