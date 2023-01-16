import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  position: absolute;
  bottom: 0;
  padding: 25px 0;
  background-color: ${(props) => props.theme.color.iceblue};
`;

const Info = styled.span`
  color: ${(props) => props.theme.color.gray};

  div {
    text-align: center;
    margin-top: 20px;
  }
`;

export { Footer, Info };
