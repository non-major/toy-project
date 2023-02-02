import React from "react";
import { useForm } from "react-hook-form";
import MyButton from "../../components/MyButton";
import { userLogin } from "../../api/userInfo";
import {
  Errors,
  Formbox,
  Input,
  KakaoBtn,
  KakaoLogo,
  KakaoText,
  MyForm,
  RegisterBox,
} from "./User.styles";
import { MyTitle } from "./Register";
import { KAKAO_AUTH_URL } from "../../components/kakao/kakaoUrl";

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
        <KakaoBtn onClick={kakaoLoginHandler}>
          <KakaoLogo
            src="https://mblogthumb-phinf.pstatic.net/MjAxODAyMDJfMTA5/MDAxNTE3NTAyODA4ODAz.pfFBh3N_7cDEfgp925XW22NJgDO2-2_CdhjOOJsaqjog.YUrOiE5xseldfEb3R9_y8LMPuy8o4ml5JCqLHi1yHGgg.PNG.marketstory24/%25EC%25B9%25B4%25EC%25B9%25B4%25EC%2598%25A4%25ED%2586%25A1_%25EB%25A1%259C%25EA%25B3%25A0_4.png?type=w800"
            alt="카카오 아이콘"
          />
          <KakaoText>카카오로 로그인하기</KakaoText>
        </KakaoBtn>
      </Formbox>
    </RegisterBox>
  );
};

export default Login;
