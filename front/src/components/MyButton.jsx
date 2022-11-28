import React from "react";
import styled, { css } from "styled-components";

const MyButton = ({ text, type, onClick }) => {
  const btnType = ["submit", "remove"].includes(type) ? type : "basic";
  return (
    <Button type={btnType} onClick={onClick}>
      {text}
    </Button>
  );
};

MyButton.defaultProps = {
  type: "basic",
};

export default MyButton;

const SubmitButton = css`
  background-color: #1565e0;
`;
const RemoveButton = css`
  background-color: #b1bfca;
`;
const BasicButton = css`
  background-color: #003c8f;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  padding: 10px 20px 10px 20px;
  color: white;
  font-size: 18px;
  white-space: pre-line;
  &:hover {
    opacity: 0.8;
  }

  font-family: "S-CoreDream-4Regular";
  ${({ type }) => type === "submit" && SubmitButton}
  ${({ type }) => type === "remove" && RemoveButton}
  ${({ type }) => type === "basic" && BasicButton}
`;
