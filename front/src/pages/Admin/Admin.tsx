import React, {
  useState,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
import { ReportList } from "../../components/ReportList/ReportList";
import ReportPageModal from "../../components/ReportPageModal/ReportPageModal";
import UserList from "../../components/UserList/UserList";
import { Container, Menu, Sidebar, Content } from "./Admin.styles";

const menuList = ["report", "userlist"];

export const RefreshContext = createContext(false);
export const RefreshDispatchContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {});

function Admin() {
  const [menu, setMenu] = useState("report");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
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
          <Menu
            id={menuList[0]}
            onClick={(event) => {
              handleMenu(event);
            }}
            menu={menu}>
            신고내역
          </Menu>
          <Menu
            id={menuList[1]}
            onClick={(event) => {
              handleMenu(event);
            }}
            menu={menu}>
            회원관리
          </Menu>
        </ul>
      </Sidebar>
      <Content>
        {menu === "report" ? (
          <ReportList
            setIsOpenModal={setIsOpenModal}
            setSelectedPostId={setSelectedPostId}
          />
        ) : (
          <UserList />
        )}
      </Content>
      {isOpenModal && (
        <ReportPageModal
          setModalState={setIsOpenModal}
          selectedPostId={selectedPostId}
        />
      )}
    </Container>
  );
}

export default Admin;
