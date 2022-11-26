import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const MyHeader = () => {
  // const MemberNav = () => {
  //   return (
  //     <div className="nav">
  //       <ul>
  //         <Link to="/mycontents">내 독서 기록</Link>
  //         <Link to="/mypage">마이페이지</Link>
  //         <Link to="/" onClick={() => sessionStorage.removeItem("userToken")}>
  //           로그아웃
  //         </Link>
  //       </ul>
  //     </div>
  //   );
  // };

  // const GuestNav = () => {
  //   return (
  //     <div className="nav">
  //       <ul>
  //         <Link to="/login">로그인</Link>
  //         <Link to="/register">회원가입</Link>
  //       </ul>
  //     </div>
  //   );
  // };

  return (
    <Header>
      <div className="logo">
        <img src="https://picsum.photos/100/100" alt="Book극곰" />
      </div>
      <Nav>
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </Nav>
      {/* {sessionStorage.getItem("userToken") ? <MemberNav /> : <GuestNav />} */}
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
`;

const Nav = styled.div`
  ul {
    display: flex;
  }

  ul li {
    margin: 0 10px;
    list-style: none;
  }
`;

export default MyHeader;
