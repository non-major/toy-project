import styled from "styled-components";

const ImgSearchModalWrap = styled.div`
  height: 60vh;
  overflow: auto;
`;

const ImgSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgSearchInput = styled.input`
  width: 300px;
  height: 30px;
  margin: 10px 5px 10px 0;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 8px;
  font-family: "S-CoreDream-4Regular";
  &:focus {
    outline: 2px solid #003c8f;
  }
`;

const SearchResultItem = styled.div`
  display: flex;
  margin: 10px 0;
  &:hover {
    cursor: pointer;
  }
`;

const SearchResultItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 5px;
  }
`;

const SearchResultItemTitle = styled.div`
  font-weight: bold;
`;

const SearchResultItemDescription = styled.div`
  overflow: hidden;
  font-size: small;
  text-overflow: wrap;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const SearchResultBookImg = styled.img`
  width: 60px;
  margin-right: 5px;
`;

export {
  ImgSearchInput,
  SearchResultItem,
  SearchResultItemDetail,
  SearchResultBookImg,
  SearchResultItemDescription,
  SearchResultItemTitle,
  ImgSearchModalWrap,
  ImgSearchBar,
};
