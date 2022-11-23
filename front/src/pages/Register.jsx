import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import MyButton from "../components/MyButton";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const Regex = { email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g };

  return (
    <Formbox>
      <MyForm onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="이메일"
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: Regex.email,
              message: "이메일 형식을 입력해주세요",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
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
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          {...register("passwordConfirm", {
            required: "비밀번호를 다시 입력해주세요",
            validate: (value) => {
              const { password } = getValues();
              return password === value || "비밀번호가 일치하지 않습니다";
            },
          })}
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        <input
          type="nickname"
          name="nickname"
          placeholder="닉네임"
          {...register("nickname", {
            required: "닉네임을 입력해주세요",
            maxLength: {
              value: 10,
              message: "최대 10자까지 입력가능합니다",
            },
          })}
        />
        {errors.nickname && <p>{errors.nickname.message}</p>}
        <MyButton text={"회원가입"} type={"submit"} />
      </MyForm>
    </Formbox>
  );
};

export default Register;

const Formbox = styled.div`
  width: 300px;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  border: none;
`;
