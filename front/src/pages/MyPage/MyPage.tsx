import React, { useEffect, useState } from "react";
import Register, { MyTitle } from "../User/Register";
import { useNavigate } from "react-router-dom";
import Chart from "../../components/Chart";
import { deleteUserInfo, getUsersInfo } from "../../api/userInfo";
import {
  ChartBox,
  Content,
  Level,
  LevelBox,
  Menu,
  MypageBox,
  RemoveUser,
  RemoveUserBox,
  Sidebar,
} from "./MyPage.styles";

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
  const navigate = useNavigate();

  const onUserRemove = async () => {
    if (window.confirm("정말 탈퇴하시겠어요?😭")) {
      deleteUserInfo();
    }
  };

  useEffect(() => {
    getUsersInfo().then((user) => {
      setNickname(user.nickname);
      setLevel(levelDivision(user.postCount));
    });
  }, []);

  const Statistics = () => {
    return (
      <>
        <LevelBox>
          <Level>
            <div className="box1">✨</div>
            <div className="box2">Lv.{level}</div>
            <div className="box3">✨</div>
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
        <ul>
          <Menu onClick={() => navigate("/mypage")}>통계보기</Menu>
          <Menu onClick={() => navigate("/mypage/edit")}>회원정보수정</Menu>
        </ul>
      </Sidebar>
      <Content>
        {isMain ? <MyTitle>{`${nickname} 님의 레벨은?`}</MyTitle> : null}
        {isMain ? <Statistics /> : <EditRegister />}
      </Content>
    </MypageBox>
  );
};

export default MyPage;
