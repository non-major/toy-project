import { useState, useEffect, useRef } from "react";
import { useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logoutAccout } from "../../redux/userReducer";
import isAdmin from "../../utils/isAdmin";
import Modal from "../Modal/Modal";
import { Header, Nav, SearchBar } from "./MyHeader.styles";

const MyHeader = () => {
  const [admin, setAdmin] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    isAdmin() === true ? setAdmin(true) : setAdmin(false);
  }, [isLogin]);

  const onSearch = () => {
    if (!searchRef.current?.value) {
      setIsModal(true);
      navigate("/");
    } else {
      navigate(`/search/${searchRef.current.value}`);
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
          <Link
            to="/admin"
            onClick={() => {
              queryClient.removeQueries({
                queryKey: ["reportList"],
              });
              queryClient.removeQueries({
                queryKey: ["userList"],
              });
            }}>
            회원관리
          </Link>
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

  const SearchModal = () => {
    return (
      <Modal title="" setModalState={setIsModal}>
        검색어를 입력해 주세요.
      </Modal>
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
          placeholder="검색어를 입력해 주세요."></input>
        <img
          src="https://res.cloudinary.com/dk9scwone/image/upload/v1671095050/freeIconMagnifyingglass_p7owop.png"
          alt="검색"
          onClick={() => {
            onSearch();
          }}
        />
      </SearchBar>

      {isModal && <SearchModal />}
      <Nav>{isLogin ? admin ? <AdminNav /> : <MemberNav /> : <GuestNav />}</Nav>
    </Header>
  );
};

export default MyHeader;
