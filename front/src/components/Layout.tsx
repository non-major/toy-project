import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MyFooter from "./MyFooter/MyFooter";
import MyHeader from "./MyHeader/MyHeader";
import { useModalState } from "../App";
import styled from "styled-components";
import ReportModal from "./ReportModal/ReportModal";

const Layout = () => {
  const state = useModalState();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
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
