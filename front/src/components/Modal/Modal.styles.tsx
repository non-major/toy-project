import styled from "styled-components";
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 60vw;
  height: auto;
  padding: 25px;
`;

const ModalCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalCloseBtn = styled.button`
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: bolder;
  color: black;
`;

export {
  ModalBackground,
  ModalContent,
  ModalTitle,
  ModalCloseWrapper,
  ModalCloseBtn,
};
