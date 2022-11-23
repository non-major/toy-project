import React from "react";
import styled, { css } from "styled-components";

const Button = ({ text, type, onClick }) => {
  const btnType = ["submit", "remove"].includes(type) ? type : "basic";
  return (
    <MyButton type={btnType} onClick={onClick}>
      {text}
    </MyButton>
  );
};

Button.defaultProps = {
  type: "basic",
};

export default Button;

const SubmitButton = css`
  background-color: #1565e0;
`;
const RemoveButton = css`
  background-color: #b1bfca;
`;
const BasicButton = css`
  background-color: #003c8f;
`;
const MyButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  padding: 10px 20px 10px 20px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  white-space: pre-line;
  &:hover {
    opacity: 0.8;
  }
  @font-face {
    font-family: "S-CoreDream-3Light";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "S-CoreDream-3Light";
  ${({ type }) => type === "submit" && SubmitButton}
  ${({ type }) => type === "remove" && RemoveButton}
  ${({ type }) => type === "basic" && BasicButton}
`;
