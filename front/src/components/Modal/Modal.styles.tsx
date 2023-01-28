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
  position: relative;
  flex-direction: column;
  background-color: white;
  width: 60vw;
  padding: 25px;
  z-index: 100;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: bolder;
  color: black;
`;

const ModalCloseButton = styled.button`
  border: none;
  position: absolute;
  right: 5%;
  &:hover {
    cursor: pointer;
    background-color: darkgray;
  }
`;

export { ModalBackground, ModalContent, ModalTitle, ModalCloseButton };
