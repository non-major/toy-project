import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "../Modal/Modal";
import {
  ImgSearchInput,
  ImgSearchModalWrap,
  ImgSearchBar,
} from "./ImageSearchModal.styles";
import ImageSearchResult from "./ImageSearchResult";
import MyButton from "../MyButton";
import axios from "axios";

type ImageSearchModalProps = {
  setBookImageUrl: Dispatch<SetStateAction<string>>;
  setModalState: Dispatch<SetStateAction<boolean>>;
};

type BookInfo = { [key: string]: string };

const ImageSearchModal = (props: ImageSearchModalProps) => {
  const [bookSearchKeyword, setbookSearchKeyword] = useState("");
  const [bookSearchResult, setbookSearchResult] = useState(Array<BookInfo>);
  const handleImageSearchInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setbookSearchKeyword(e.target.value);
  };

  const handleImageSearchClick = async () => {
    try {
      if (bookSearchKeyword === "") {
        console.log("검색어 없음");
        return;
      }
      const { data } = await axios.get(`/api/image?query=${bookSearchKeyword}`);
      setbookSearchResult([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageSearchInputEnter = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      handleImageSearchClick();
    }
  };

  return (
    <Modal title="책 이미지 검색하기" setModalState={props.setModalState}>
      <ImgSearchModalWrap>
        <ImgSearchBar>
          <ImgSearchInput
            name="img"
            id="img"
            placeholder="책 제목, 지은이, 키워드로 검색할 수 있습니다."
            value={bookSearchKeyword}
            onChange={handleImageSearchInputChange}
            onKeyUp={handleImageSearchInputEnter}
          />
          <MyButton btntype="basic" onClick={handleImageSearchClick}>
            검색
          </MyButton>
        </ImgSearchBar>
        {bookSearchResult.map((item, index) => (
          <ImageSearchResult
            key={index}
            item={item}
            setBookImageUrl={props.setBookImageUrl}
            setModalState={props.setModalState}
          />
        ))}
      </ImgSearchModalWrap>
    </Modal>
  );
};

export default ImageSearchModal;
