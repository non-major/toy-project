import styled from "styled-components";

const Footer = styled.footer`
  width: 100vw;
  height: 10vh;
  position: absolute;
  bottom: 0;
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

export { Footer, Info };
