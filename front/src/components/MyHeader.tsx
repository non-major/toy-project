import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../asset/mainlogo.png";

const MyHeader = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    sessionStorage.getItem("userToken") ? setUser(true) : setUser(false);
  }, []);

  const MemberNav = () => {
    return (
      <div className="nav">
        <ul>
          <Link
            to="/mydiary"
            onClick={() => {
              window.location.replace("/mydiary");
            }}>
            내 독서 기록
          </Link>
          <Link to="/mypage">마이페이지</Link>
          <Link
            to="/"
            onClick={() => {
              sessionStorage.removeItem("userToken");
              alert("로그아웃 되셨습니다.");
              setUser(false);
            }}>
            로그아웃
          </Link>
        </ul>
      </div>
    );
  };

  const GuestNav = () => {
    return (
      <div className="nav">
        <ul>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
        </ul>
      </div>
    );
  };

  return (
    <Header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Book극곰" />
        </Link>
      </div>

      <Nav>{user ? <MemberNav /> : <GuestNav />}</Nav>
    </Header>
  );
};

const Header = styled.header`
  min-height: 100px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15vw;
  border-bottom: 1px solid black;

  img {
    height: 10vh;
    margin-left: 20px;
  }
`;

const Nav = styled.div`
  ul {
    display: flex;
  }

  ul a {
    margin: 0 10px;
    list-style: none;
    color: black;
    text-decoration: none;
  }
`;

export default MyHeader;
