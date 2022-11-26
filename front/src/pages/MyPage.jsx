import React from "react";
import Register from "./Register";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyPage = ({ isMain }) => {
  const onUserRemove = (data) => {
    if (window.confirm("정말 탈퇴하시겠어요?😭")) {
      alert("회원 정보가 안전하게 삭제되었습니다.");
    }
  };
  const navigate = useNavigate();
  const Statistics = () => {
    return <></>;
  };
  const EditRegister = () => {
    return (
      <>
        <Register isEdit={true} />
        <div>
          <div>book극곰을 더이상 이용하지 않는다면😢</div>
          <RemoveUserBox>
            <RemoveUser onClick={onUserRemove}>회원탈퇴 바로가기 ></RemoveUser>
          </RemoveUserBox>
        </div>
      </>
    );
  };
  return (
    <MypageBox>
      <Sidebar>
        <ul>
          <Menu>
            <a onClick={() => navigate("/mypage/main")}>통계보기</a>
          </Menu>
          <Menu>
            <a onClick={() => navigate("/mypage/edit")}>회원정보수정</a>
          </Menu>
        </ul>
      </Sidebar>
      <ContentBar>{isMain ? <Statistics /> : <EditRegister />}</ContentBar>
    </MypageBox>
  );
};

export default MyPage;

const MypageBox = styled.div`
  width: 100%;
  display: flex;
`;
const Sidebar = styled.div`
  border-right: 1px solid gray;
  padding-right: 30px;
`;

const Menu = styled.li`
  font-size: 18px;
  margin-top: 20%;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;
const ContentBar = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% 0 10% 0;
`;

const RemoveUserBox = styled.div`
  margin-top: 7px;
`;

const RemoveUser = styled.a`
  cursor: pointer;
  font-weight: 700;
`;
