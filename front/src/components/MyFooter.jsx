import React from "react";
import styled from "styled-components";

const MyFooter = () => {
  return (
    <Footer>
      <Info>
        <div>이용약관 | 개인정보취급방침 | 고객센터</div>
        <div>
          (주)비전곰 | 서울특별시 성동구 아차산로17길 48 | ⓒ VisionBear Inc. All
          Rights Reserved.
        </div>
      </Info>
    </Footer>
  );
};

const Footer = styled.footer`
  width: 100vw;
  height: 10vh;
  padding: 25px 0;
  background-color: #e3f2fd;
`;

const Info = styled.span`
  color: lightgray;

  div {
    text-align: center;
    margin-top: 20px;
  }
`;

export default MyFooter;
