import React from "react";
import { Outlet } from "react-router-dom";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";

const Layout = () => {
  return (
    <main>
      <MyHeader />
      <section>
        <Outlet />
      </section>
      <MyFooter />
    </main>
  );
};

export default Layout;
