import React from "react";
import { Outlet } from "react-router-dom";

import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";

const Layout = () => {
  return (
    <main>
      <MyHeader />
      <Outlet />
      <MyFooter />
    </main>
  );
};

export default Layout;
