import React from "react";
import {
  ModalBackground,
  ModalContent,
  ModalTitle,
  ModalCloseWrapper,
  ModalCloseBtn,
} from "./Modal.styles";
import { useModalDispatch } from "../../App";
import closeBtnImg from "../../asset/silver-close-button-png.png";

const Modal = () => {
  const dispatch = useModalDispatch();
  return (
    <ModalBackground>
      <ModalContent>
        <ModalCloseWrapper>
          <ModalCloseBtn onClick={() => dispatch({ type: "MODAL TOGGLE" })}>
            <img src={closeBtnImg} width="25" alt="창 닫기" />
          </ModalCloseBtn>
        </ModalCloseWrapper>
        {/* <ModalTitle>asdf</ModalTitle> */}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
