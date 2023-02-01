import React from "react";
import styled from "styled-components";

interface BtnProps {
  children?: React.ReactNode;
  btntype?: "basic" | "submit" | "remove";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const MyButton = ({ children, btntype, onClick, disabled }: BtnProps) => {
  return (
    <Button btntype={btntype} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

MyButton.defaultProps = {
  text: "버튼",
  type: "basic",
  onClick: null,
  disabled: false,
};

export default MyButton;

const Button = styled.button<BtnProps>`
  border: none;
  border-radius: 12px;
  padding: 10px 20px 10px 20px;
  color: white;
  font-size: 18px;
  white-space: pre-line;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;

  font-family: "S-CoreDream-4Regular";
  ${(props) => props.btntype === "basic" && `background-color: #003c8f`}
  ${(props) => props.btntype === "submit" && `background-color: #1565e0`}
  ${(props) => props.btntype === "remove" && `background-color: #b1bfca`}
`;
