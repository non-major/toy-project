import React from "react";
import logo from "../../asset/mainlogo.png";
import { ImgWrap, StyledLink, NotFoundText } from "./NotFound.styles";

function NotFound() {
  return (
    <>
      <ImgWrap>
        <img src={logo} alt="북극곰 로고" />
      </ImgWrap>
      <NotFoundText>앗, 존재하지 않는 페이지입니다!</NotFoundText>
      <StyledLink to="/">메인으로 돌아가기</StyledLink>
    </>
  );
}

export default NotFound;
