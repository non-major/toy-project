import styled, { css } from "styled-components";

interface Menu {
  id: string;
  menu: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  border-right: 1px solid gray;
  padding-right: 5%;
  white-space: nowrap;

  @media (max-width: 768px) {
    border: none;
    padding-bottom: 5%;
    border-bottom: 1px solid gray;
  }
`;

const Menu = styled.li<Menu>`
  font-size: 1.2rem;
  margin-top: 20px;
  cursor: pointer;

  ${({ menu, id }) =>
    menu === id &&
    css`
      font-weight: bold;
    `}

  &:hover {
    font-weight: 700;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% 0 5% 0;
`;

const Modal = styled.div`
  border: solid black 1px;
  position: fixed;
`;

export { Container, Sidebar, Menu, Content, Modal };
