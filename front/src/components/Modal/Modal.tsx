import useOneClickOutside from "../../hooks/useOneClickOutside";
import React, {
  ReactComponentElement,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import {
  ModalBackground,
  ModalContent,
  ModalTitle,
  ModalCloseButton,
} from "./Modal.styles";
// import { useModalDispatch } from "../../App";

type Modal = {
  title: string;
  children: React.ReactNode;
  setModalState: Dispatch<SetStateAction<boolean>>;
};

const Modal = (props: Modal) => {
  const divRef = useRef<HTMLDivElement>(null);
  useOneClickOutside(divRef, () => {
    props.setModalState(false);
  });

  return (
    <ModalBackground ref={divRef}>
      <ModalContent>
        <ModalCloseButton onClick={() => props.setModalState(false)}>
          x
        </ModalCloseButton>
        <ModalTitle>{props.title}</ModalTitle>
        {props.children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
