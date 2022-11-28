import React from "react";
import { useForm } from "react-hook-form";
import {
  Formbox,
  MyForm,
  Input,
  Errors,
  RegisterBox,
  MyTitle,
} from "./Register";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    alert("로그인이 완료되었습니다.");
    console.log(data);
    navigate("/", { replace: true });
  };
  const Regex = { email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g };
  return (
    <RegisterBox>
      <MyTitle title="로그인" />
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
          {errors.email && <Errors>{errors.email.message}</Errors>}
          <label>
            <p>비밀번호</p>
            <Input
              type="password"
              name="password"
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
          {errors.password && <Errors>{errors.password.message}</Errors>}
          <MyButton text={"로그인"} type={"submit"} />
        </MyForm>
      </Formbox>
    </RegisterBox>
  );
};

export default Login;
