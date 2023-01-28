import React, { Dispatch, SetStateAction } from "react";
import {
  SearchResultItem,
  SearchResultItemDetail,
  SearchResultBookImg,
  SearchResultItemDescription,
  SearchResultItemTitle,
} from "./ImageSearchModal.styles";

type BookItem = {
  item: { [key: string]: string };
  setBookImageUrl: Dispatch<SetStateAction<string>>;
  setModalState: Dispatch<SetStateAction<boolean>>;
};

const ImageSearchResult = ({
  item,
  setBookImageUrl,
  setModalState,
}: BookItem) => {
  const handleSearchResultItemClick = () => {
    setBookImageUrl(item.image);
    setModalState(false);
  };
  return (
    <SearchResultItem onClick={handleSearchResultItemClick}>
      <div>
        <SearchResultBookImg src={item.image} />
      </div>
      <SearchResultItemDetail>
        <SearchResultItemTitle>
          {item.author},{item.title}
        </SearchResultItemTitle>
        <SearchResultItemDescription>
          {item.description}
        </SearchResultItemDescription>
      </SearchResultItemDetail>
    </SearchResultItem>
  );
};

export default ImageSearchResult;
