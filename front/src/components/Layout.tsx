import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MyFooter from "./MyFooter/MyFooter";
import MyHeader from "./MyHeader/MyHeader";
import Modal from "./Modal/Modal";
import { useModalState } from "../App";
import styled from "styled-components";

const Layout = () => {
  const state = useModalState();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {state.isModalOpen && <Modal />}
      <LayoutMain>
        <MyHeader />
        <section>
          <Outlet />
        </section>
        <MyFooter />
      </LayoutMain>
    </>
  );
};

export default Layout;

const LayoutMain = styled.main`
  position: relative;
`;
