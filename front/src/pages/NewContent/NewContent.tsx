import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/MyButton";
import axios from "axios";
import {
  TitleInput,
  TitleWrap,
  ContentInput,
  ImgSearchInput,
} from "./NewContent.styles";
import ButtonWrap from "../../styles/ButtonWrap";
import { MyTitle } from "../User/Register";

function NewContent() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    title: "",
    img: "",
    content: "",
  });

  const token = sessionStorage.getItem("userToken");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleChangeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleContentChangeState = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setState({ ...state, content: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(token);
    await axios
      .post(
        "/api/posts",
        {
          title: state.title,
          content: state.content,
          image: state.img,
        },
        config,
      )
      .then((response) => {
        console.log({
          title: response.data.title,
          content: response.data.content,
          image: response.data.image,
          date: response.data.date,
          postId: response.data.id,
        });
        alert("독서 기록 등록이 완료되었습니다.");
        navigate(`/content/${response.data.id}`);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleQuit = () => {
    if (window.confirm("작성을 취소하시겠습니까?")) {
      navigate("/");
    }
  };

  return (
    <div>
      <TitleWrap>
        <MyTitle>독서 기록 작성하기</MyTitle>
      </TitleWrap>
      <p>
        <label htmlFor="title">제목</label>
      </p>
      <TitleInput
        name="title"
        id="title"
        placeholder="제목을 적어주세요."
        value={state.title}
        onChange={handleChangeState}
      />
      <p>
        <label htmlFor="search">책 이미지 검색하기</label>
      </p>
      <div>
        <ImgSearchInput
          name="img"
          id="img"
          placeholder="어떤 책을 읽으셨나요?"
          value={state.img}
          onChange={handleChangeState}
        />
        <MyButton btntype="basic" onClick={handleQuit}>
          검색
        </MyButton>
      </div>
      <p>내용</p>
      <ContentInput
        name="content"
        placeholder="내용을 적어주세요."
        value={state.content}
        onChange={handleContentChangeState}
      />
      <ButtonWrap>
        <MyButton btntype="submit" onClick={handleSubmit}>
          저장하기
        </MyButton>
        <MyButton btntype="basic" onClick={handleQuit}>
          작성취소
        </MyButton>
      </ButtonWrap>
    </div>
  );
}

export default NewContent;
