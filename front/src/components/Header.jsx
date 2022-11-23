import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://picsum.photos/100/100" />
      </div>
      <div className="nav">
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
