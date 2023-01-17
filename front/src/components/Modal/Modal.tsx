import React, { ReactComponentElement } from "react";
import {
  ModalBackground,
  ModalContent,
  ModalTitle,
  ModalCloseWrapper,
  ModalCloseBtn,
} from "./Modal.styles";
import { useModalDispatch } from "../../App";
import closeBtnImg from "../../asset/silver-close-button-png.png";

type Modal = { title: string; children: React.ReactNode };

const Modal = (props: Modal) => {
  const dispatch = useModalDispatch();
  return (
    <ModalBackground>
      <ModalContent>
        <ModalCloseWrapper>
          <ModalCloseBtn onClick={() => dispatch({ type: "Report" })}>
            <img src={closeBtnImg} width="25" alt="창 닫기" />
          </ModalCloseBtn>
        </ModalCloseWrapper>
        <ModalTitle>{props.title}</ModalTitle>
        {props.children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
