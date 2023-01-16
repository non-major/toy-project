import React from "react";
import { Path } from "react-router-dom";
import { Menu, MenuLink } from "./Sidebar.styles";

type To = string | Partial<Path>;

interface SidebarText {
  to: To;
  children: React.ReactNode;
}

const SidebarText = ({ to, children }: SidebarText) => {
  return (
    <ul>
      <MenuLink to={to}>
        {({ isActive }) => (
          <Menu className={isActive ? "activeMenu" : undefined}>
            {children}
          </Menu>
        )}
      </MenuLink>
    </ul>
  );
};

export default SidebarText;
