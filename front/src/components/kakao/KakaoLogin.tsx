import { response } from "msw";
import React, { useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { kakaoLogin } from "../../api/userInfo";
import { RegisterBox } from "../../pages/User/User.styles";

const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    kakaoLogin(code);
  }, [code]);

  return (
    <RegisterBox>
      <PulseLoader color="#1565c0" />
    </RegisterBox>
  );
};

export default KakaoLogin;
