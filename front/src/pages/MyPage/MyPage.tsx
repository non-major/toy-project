import React, { useEffect, useMemo, useState } from "react";
import Register, { MyTitle } from "../User/Register";
import Chart from "../../components/Chart";
import { deleteUserInfo, getUsersInfo } from "../../api/userInfo";
import {
  ChartBox,
  Content,
  Level,
  LevelBox,
  MypageBox,
  RemoveUser,
  RemoveUserBox,
} from "./MyPage.styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarText from "../../components/Sidebar/SidebarText";
import { useNavigate } from "react-router-dom";

interface MyPageProps {
  isMain?: boolean;
}

// 레벨 구분
const levelDivision = (level: number) => {
  if (level < 3) {
    return 1;
  } else if (3 <= level && level < 8) {
    return 2;
  } else if (8 <= level && level < 15) {
    return 3;
  } else if (15 <= level && level < 24) {
    return 4;
  } else if (24 <= level && level < 33) {
    return 5;
  }
};

interface User {
  nickname: string;
  postCount: number;
}

const MyPage = ({ isMain }: MyPageProps) => {
  const [user, setUser] = useState<User>({
    nickname: "",
    postCount: 0,
  });
  const navigate = useNavigate();
  const userLevel = useMemo(
    () => levelDivision(user.postCount),
    [user.postCount],
  );

  const onUserRemove = async () => {
    if (window.confirm("정말 탈퇴하시겠어요?😭")) {
      deleteUserInfo();
      navigate("/");
    }
  };

  useEffect(() => {
    getUsersInfo().then((user) => {
      setUser(user);
    });
  }, []);

  const Statistics = () => {
    return (
      <>
        <LevelBox>
          <div style={{ fontSize: "18px" }}>
            누적 독서량 {user.postCount}권 달성!
          </div>
          <Level>
            <div style={{ transform: "rotateY(180deg)" }}>🎉</div>
            <div>Lv.{userLevel}</div>
            <div>🎉</div>
          </Level>
        </LevelBox>
        <ChartBox>
          <MyTitle>{"월별 통계보기"}</MyTitle>
          <Chart />
        </ChartBox>
      </>
    );
  };

  const EditRegister = () => {
    return (
      <>
        <Register isEdit={true} />
        <RemoveUserBox>
          <div>book극곰을 더이상 이용하지 않는다면😢</div>
          <RemoveUser onClick={onUserRemove}>
            {"회원탈퇴 바로가기 >"}
          </RemoveUser>
        </RemoveUserBox>
      </>
    );
  };
  return (
    <MypageBox>
      <Sidebar>
        <SidebarText to="/mypage/statistics">통계보기</SidebarText>
        <SidebarText to="/mypage/useredit">회원정보수정</SidebarText>
      </Sidebar>
      <Content>
        {isMain && (
          <div style={{ padding: "20px" }}>
            <MyTitle>{`${user.nickname} 님의 레벨은?`}</MyTitle>
          </div>
        )}
        {isMain ? <Statistics /> : <EditRegister />}
      </Content>
    </MypageBox>
  );
};

export default MyPage;
