import React from "react";
import { SidebarContainer } from "./Sidebar.styles";

interface Sidebar {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Sidebar) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};

export default Sidebar;
