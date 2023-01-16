import React, { useState } from "react";
import UserList from "../../components/UserList/UserList";
import { Container, Menu, Sidebar, Content } from "./Admin.styles";

const menuList = ["report", "userlist"];

function Admin() {
  const [menu, setMenu] = useState("report");

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    const clickedMenu = (event.target as HTMLElement).id;

    if (menu !== clickedMenu) {
      setMenu(clickedMenu);
    }
  };

  return (
    <Container>
      <Sidebar>
        <ul>
          <Menu id={menuList[0]} onClick={handleMenu}>
            신고내역
          </Menu>
          <Menu id={menuList[1]} onClick={handleMenu}>
            회원관리
          </Menu>
        </ul>
      </Sidebar>
      <Content>{menu === "report" ? "신고내역" : <UserList />}</Content>
    </Container>
  );
}

export default Admin;
