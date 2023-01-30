import React from "react";
import { useForm } from "react-hook-form";
import MyButton from "../../components/MyButton";
import { kakaoLogin, userLogin } from "../../api/userInfo";
import { Errors, Formbox, Input, MyForm, RegisterBox } from "./User.styles";
import { MyTitle } from "./Register";
import { KAKAO_AUTH_URL, REST_API_KEY } from "../../components/kakao/kakaoUrl";
import KakaoLogin from "react-kakao-login";
import { useNavigate } from "react-router-dom";

interface FormData {
  errors: {
    email: {
      message: string;
    };
  };
  password: string;
  email: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const onSubmit = (data: FormData) => {
    userLogin(data);
  };

  const Regex = { email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g };

  return (
    <RegisterBox>
      <MyTitle>{"로그인"}</MyTitle>
      <Formbox>
        <MyForm onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>이메일</p>
            <Input
              type="email"
              placeholder="이메일"
              id="email"
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: Regex.email,
                  message: "이메일 형식을 입력해주세요",
                },
              })}
            />
          </label>
          {errors.email && <Errors>{errors?.email?.message}</Errors>}
          <label>
            <p>비밀번호</p>
            <Input
              type="password"
              placeholder="비밀번호"
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: {
                  value: 6,
                  message: "최소 6자 이상의 비밀번호를 입력해주세요",
                },
              })}
            />
          </label>
          {errors.password && <Errors>{errors?.password?.message}</Errors>}
          <MyButton btntype={"submit"}>{"로그인"}</MyButton>
        </MyForm>
      </Formbox>
      <img
        src="kakao_login_wide.png"
        alt="kakaologin"
        onClick={kakaoLoginHandler}
      />
      {/* <KakaoLogin
        token={`${REST_API_KEY}`}
        onSuccess={(res) => console.log(res)}
        onFail={() => console.log("실패")}
        onLogout={() => console.log("로그아웃")}
        // useLoginForm
      /> */}
    </RegisterBox>
  );
};

export default Login;
