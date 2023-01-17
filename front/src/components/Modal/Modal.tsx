import React, { ReactComponentElement } from "react";
import { ModalBackground, ModalContent, ModalTitle } from "./Modal.styles";
// import { useModalDispatch } from "../../App";

type Modal = { title: string; children: React.ReactNode };

const Modal = (props: Modal) => {
  // const dispatch = useModalDispatch();
  return (
    <ModalBackground>
      <ModalContent>
        <ModalTitle>{props.title}</ModalTitle>
        {props.children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
