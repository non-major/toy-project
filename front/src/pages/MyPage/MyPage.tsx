import React, { useMemo } from "react";
import Register, { MyTitle } from "../User/Register";
import { getUsersInfo } from "../../api/userInfo";
import { ChartBox, Content, Level, LevelBox, MypageBox } from "./MyPage.styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarText from "../../components/Sidebar/SidebarText";
import Chart from "../../components/Chart/Chart";
import { useQuery } from "react-query";

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
  const { data: userInfo } = useQuery("userInfo", () => getUsersInfo(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const userLevel = useMemo(
    () => levelDivision(userInfo?.post_count),
    [userInfo?.post_count],
  );

  const Statistics = () => {
    return (
      <>
        <LevelBox>
          <div style={{ fontSize: "18px" }}>
            누적 독서량 {userInfo?.post_count}권 달성!
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
      </>
    );
  };
  return (
    <MypageBox>
      <Sidebar>
        <SidebarText to="/mypage/statistics">통계보기</SidebarText>
        <SidebarText to="/mypage/useredit">회원정보수정</SidebarText>
      </Sidebar>
      {userInfo && (
        <Content>
          {isMain && (
            <div style={{ padding: "20px" }}>
              <MyTitle>{`${userInfo?.nickname} 님의 레벨은?`}</MyTitle>
            </div>
          )}
          {isMain ? <Statistics /> : <EditRegister />}
        </Content>
      )}
    </MypageBox>
  );
};

export default MyPage;
