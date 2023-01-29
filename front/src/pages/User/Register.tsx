import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MyButton from "../../components/MyButton";
import {
  createUserInfo,
  getUsersInfo,
  updateUserInfo,
} from "../../api/userInfo";
import {
  Errors,
  Formbox,
  Input,
  MyForm,
  RegisterBox,
  Title,
} from "./User.styles";

interface Props {
  children: React.ReactNode;
}

interface RegisterProps {
  isEdit?: boolean;
}

interface FormData {
  errors: {
    email: {
      message: string;
    };
  };
  password: string;
  passwordConfirm: string;
  nickname: string;
  email: string;
}

export const MyTitle = ({ children }: Props) => {
  return <Title>{children}</Title>;
};

const Register = ({ isEdit }: RegisterProps) => {
  const [email, setEmail] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>();

  useEffect(() => {
    if (isEdit) {
      getUsersInfo().then((user) => {
        setEmail(user.email);
      });
    }
  }, [isEdit]);

  const onSubmit = (data: FormData) => {
    if (isEdit) {
      if (window.confirm("수정하시겠습니까?")) {
        updateUserInfo(data);
      }
    } else {
      createUserInfo(data);
    }
  };
  const Regex = { email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g };

  return (
    <RegisterBox>
      <MyTitle>{isEdit ? "회원정보수정" : "회원가입"}</MyTitle>
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
          {errors.password && <Errors>{errors.password.message}</Errors>}
          <label>
            <p>비밀번호확인</p>
            <Input
              type="password"
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
            <Errors>{errors?.passwordConfirm?.message}</Errors>
          )}
          <label>
            <p>닉네임</p>
            <Input
              type="nickname"
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
          <MyButton btntype={isEdit ? "remove" : "submit"}>
            {isEdit ? "수정하기" : "회원가입"}
          </MyButton>
        </MyForm>
      </Formbox>
    </RegisterBox>
  );
};

export default Register;
