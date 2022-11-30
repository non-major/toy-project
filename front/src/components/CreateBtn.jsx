import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pencil from "../asset/pencil.png";

const CreateBtn = () => {
  const navigate = useNavigate();

  const auth = () => {
    return navigate(sessionStorage.getItem("userToken") ? "/new" : "/login");
  };

  return (
    <Btn onClick={auth}>
      <img src={pencil} />
    </Btn>
  );
};

const Btn = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  background-color: #003c8f;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  position: fixed;
  bottom: 10vh;
  right: 18vw;
  z-index: 99;

  img {
    width: 50%;
    height: 50%;
    padding: 25% 25%;
    object-fit: cover;
  }
`;

export default CreateBtn;
