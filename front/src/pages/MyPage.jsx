import React, { useEffect, useState } from "react";
import Register, { MyTitle } from "./Register";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Chart from "../components/Chart";
import getUsersInfo from "../api/getUserInfo";
import axios from "axios";

const MyPage = ({ isMain }) => {
  const [nickname, setNickname] = useState("");
  const [level, setLevel] = useState("");
  const navigate = useNavigate();
  // 레벨 구분
  const levelDivision = (level) => {
    if (level < 2) {
      return 1;
    } else if (2 <= level && level < 5) {
      return 2;
    } else if (5 <= level && level < 10) {
      return 3;
    } else if (10 <= level && level < 15) {
      return 4;
    } else if (15 <= level && level < 20) {
      return 5;
    }
  };
  // 회원탈퇴
  const onUserRemove = async () => {
    const userToken = sessionStorage.getItem("userToken");
    if (window.confirm("정말 탈퇴하시겠어요?😭")) {
      await axios.delete("/api/user/delete", {
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      });
      alert("회원정보가 안전하게 삭제되었습니다.");
      navigate("/", { replace: true });
    }
  };
  // 유저 정보 가져오기
  useEffect(() => {
    getUsersInfo().then((user) => {
      setNickname(user.data.nickname);
      setLevel(levelDivision(user.data.postCount));
    });
  }, []);
  // 통계보기
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
          <MyTitle title="월별 통계보기" />
          <Chart />
        </ChartBox>
      </>
    );
  };
  // 회원정보수정
  const EditRegister = () => {
    return (
      <>
        <Register isEdit={true} />
        <RemoveUserBox>
          <div>book극곰을 더이상 이용하지 않는다면😢</div>
          <RemoveUser onClick={onUserRemove}>회원탈퇴 바로가기 ></RemoveUser>
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
        {isMain ? <MyTitle title={`${nickname} 님의 레벨은?`} /> : null}
        {isMain ? <Statistics /> : <EditRegister />}
      </Content>
    </MypageBox>
  );
};

export default MyPage;

const MypageBox = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LevelBox = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Level = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 700;
  & .box1 {
    align-self: flex-start;
    font-size: 2.5rem;
    animation: rotate_star 2s ease-in-out infinite;

    @keyframes rotate_star {
      100% {
        transform: rotateY(360deg);
      }
    }
  }
  & .box2 {
    align-self: center;
  }
  & .box3 {
    align-self: flex-end;
    font-size: 2rem;
    animation: rotate_star 2s ease-in-out infinite;
  }
`;

const ChartBox = styled.h2`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sidebar = styled.div`
  border-right: 1px solid gray;
  padding-right: 5%;
  white-space: nowrap;

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

  &:hover {
    font-weight: 700;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% 0 5% 0;
`;

const RemoveUserBox = styled.div`
  font-size: 16px;
`;

const RemoveUser = styled.div`
  cursor: pointer;
  font-weight: 700;
  margin-top: 7px;
`;
