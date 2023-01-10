import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MyFooter from "./MyFooter/MyFooter";
import MyHeader from "./MyHeader/MyHeader";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
