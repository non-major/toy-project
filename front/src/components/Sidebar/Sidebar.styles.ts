import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  padding-top: 40px;
  border-right: 1px solid gray;
  padding-right: 40px;
  white-space: nowrap;
  min-height: 70vh;

  @media (max-width: 768px) {
    border: none;
    padding-bottom: 5%;
    border-bottom: 1px solid gray;
  }
`;

const Menu = styled.li`
  font-size: 1.2rem;
  margin-top: 20px;
  cursor: pointer;

  &.activeMenu {
    font-weight: 800;
  }
`;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export { SidebarContainer, Menu, MenuLink };
