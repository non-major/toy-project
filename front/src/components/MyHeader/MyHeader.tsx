import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logoutAccout } from "../../redux/userReducer";
import { Header, Nav, SearchBar } from "./MyHeader.styles";

const MyHeader = () => {
  const [admin, setAdmin] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    sessionStorage.getItem("role") === "admin"
      ? setAdmin(true)
      : setAdmin(false);
  }, [isLogin]);

  const onSearch = () => {
    if (!searchRef.current?.value) {
      navigate("/");
    } else {
      navigate("/");
      searchRef.current.value = "";
    }
  };

  const MemberNav = () => {
    return (
      <div className="nav">
        <ul>
          <Link to="/mydiary">내 독서 기록</Link>
          <Link to="/mypage/statistics">마이페이지</Link>
          <Link
            to="/"
            onClick={() => {
              sessionStorage.removeItem("userToken");
              sessionStorage.removeItem("role");
              alert("로그아웃 되셨습니다.");
              dispatch(logoutAccout());
            }}>
            로그아웃
          </Link>
        </ul>
      </div>
    );
  };

  const AdminNav = () => {
    return (
      <div className="nav">
        <ul>
          <Link to="/admin">회원관리</Link>
          <Link
            to="/"
            onClick={() => {
              sessionStorage.removeItem("userToken");
              sessionStorage.removeItem("role");
              alert("로그아웃 되셨습니다.");
              dispatch(logoutAccout());
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
          <img
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1672905634/rvbfbaqvqlpaxxgh2opb.png"
            alt="Book극곰"
          />
        </Link>
      </div>

      <SearchBar>
        <input
          type="text"
          ref={searchRef}
          placeholder="검색어를 입력해 주세요."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}></input>
        <img
          src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095050/freeIconMagnifyingglass_p7owop.png"
          alt="검색"
          onClick={() => {
            onSearch();
          }}
        />
      </SearchBar>

      <Nav>{isLogin ? admin ? <AdminNav /> : <MemberNav /> : <GuestNav />}</Nav>
    </Header>
  );
};

export default MyHeader;
