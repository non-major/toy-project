import React, { useEffect, useState } from "react";
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

const MyPage = ({ isMain }: MyPageProps) => {
  const [nickname, setNickname] = useState("");
  const [level, setLevel] = useState<number>();
  const [postCount, setPostCount] = useState<number>();

  const onUserRemove = async () => {
    if (window.confirm("정말 탈퇴하시겠어요?😭")) {
      deleteUserInfo();
    }
  };

  useEffect(() => {
    getUsersInfo().then((user) => {
      setNickname(user.nickname);
      setLevel(levelDivision(user.postCount));
      setPostCount(user.postCount);
    });
  }, []);

  const Statistics = () => {
    return (
      <>
        <LevelBox>
          <div style={{ fontSize: "18px" }}>
            누적 독서량 {postCount}권 달성!
          </div>
          <Level>
            <div style={{ transform: "rotateY(180deg)" }}>🎉</div>
            <div>Lv.{level}</div>
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
            <MyTitle>{`${nickname} 님의 레벨은?`}</MyTitle>
          </div>
        )}
        {isMain ? <Statistics /> : <EditRegister />}
      </Content>
    </MypageBox>
  );
};

export default MyPage;
