import React from "react";
import { useForm } from "react-hook-form";
import { Formbox, MyForm, Input, Errors } from "./Register";
import styled from "styled-components";
import MyButton from "../components/MyButton";

const MyPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    if (window.confirm("수정하시겠습니까?")) {
      console.log(data);
    }
    // 새로고침
    window.location.reload();
  };
  const onUserRemove = (data) => {
    if (window.confirm("정말 탈퇴하시겠어요?😭")) {
      console.log(data);
    }
  };
  return (
    <Formbox>
      <MyForm onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>이메일</p>
          <Input
            type="email"
            placeholder="이메일은 수정 못함!"
            id="email"
            disabled
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
        <label>
          <p>비밀번호확인</p>
          <Input
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
        </label>
        {errors.passwordConfirm && (
          <Errors>{errors.passwordConfirm.message}</Errors>
        )}
        <label>
          <p>닉네임</p>
          <Input
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
        </label>
        {errors.nickname && <Errors>{errors.nickname.message}</Errors>}
        <MyButton text={"수정하기"} type={"remove"} />
        <br />
        <span>book극곰을 더이상 이용하지 않는다면😢</span>
        <RemoveUserBox>
          <RemoveUser onClick={onUserRemove}>회원탈퇴 바로가기 ></RemoveUser>
        </RemoveUserBox>
      </MyForm>
    </Formbox>
  );
};

export default MyPage;

const RemoveUserBox = styled.div`
  margin-top: 10px;
`;

const RemoveUser = styled.a`
  cursor: pointer;
  font-weight: 600;
`;
