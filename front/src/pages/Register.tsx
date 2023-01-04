import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import getUsersInfo from "../api/getUserInfo";
import axios from "axios";

export const MyTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

const Register = ({ isEdit }) => {
  const [email, setEmail] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    if (isEdit) {
      getUsersInfo().then((user) => {
        setEmail(user.data.email);
      });
    }
  }, []);
  const onSubmit = async (data) => {
    if (isEdit) {
      if (window.confirm("수정하시겠습니까?")) {
        const userToken = sessionStorage.getItem("userToken");
        console.log(userToken);
        try {
          await axios.patch(
            `/api/user/update`,
            {
              nickname: data.nickname,
              currentPassword: data.password,
            },
            {
              headers: {
                authorization: `Bearer ${userToken}`,
              },
            },
          );
          navigate("/mypage", { replace: true });
          window.location.reload();
        } catch (err) {
          alert(`${err.response.data.reason}`);
        }
      } else {
        alert("수정이 취소되었습니다.");
        window.location.reload();
      }
    } else {
      try {
        await axios.post("/api/user/register", {
          email: data.email,
          password: data.password,
          nickname: data.nickname,
        });
        alert("회원가입이 완료되었습니다.");
        navigate("/login", { replace: true });
      } catch (err) {
        alert(`${err.response.data.reason}`);
      }
    }
  };
  const Regex = { email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g };

  return (
    <RegisterBox>
      <MyTitle title={isEdit ? "회원정보수정" : "회원가입"} />
      <Formbox>
        <MyForm onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>이메일</p>
            <Input
              value={email}
              disabled={isEdit ? true : false}
              type="email"
              placeholder="이메일"
              id="email"
              {...(isEdit
                ? null
                : register("email", {
                    required: "이메일을 입력해주세요",
                    pattern: {
                      value: Regex.email,
                      message: "이메일 형식을 입력해주세요",
                    },
                  }))}
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
          <MyButton
            text={isEdit ? "수정하기" : "회원가입"}
            type={isEdit ? "remove" : "submit"}
          />
        </MyForm>
      </Formbox>
    </RegisterBox>
  );
};

export default Register;

export const RegisterBox = styled.div`
  width: 100%;
  margin: 5% 0 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5%;
`;

export const Formbox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Errors = styled.p`
  color: red;
  margin-left: 15px;
  margin-bottom: 10px;
  font-size: 12px;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 8px;
  &:focus {
    outline: 2px solid #003c8f;
  }

  font-family: "S-CoreDream-4Regular";
`;
