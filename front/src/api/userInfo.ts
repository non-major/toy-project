import axios from "axios";
import { KAKAO_AUTH_URL } from "../components/kakao/kakaoUrl";

const userToken = sessionStorage.getItem("userToken");

interface Data {
  email?: string;
  nickname?: string;
  password: string;
}

const getUsersInfo = async () => {
  try {
    const user = await axios.get(`/api/users/myInfo`, {
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return user.data;
  } catch (err) {
    alert(`회원정보를 조회할 수 없습니다.`);
  }
};

const createUserInfo = async (data: Data) => {
  try {
    await axios.post("/api/guest/register", {
      email: data.email,
      password: data.password,
      nickname: data.nickname,
    });
    alert("회원가입이 완료되었습니다.");
    window.location.replace("/login");
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      alert(`${err.response?.data.reason}`);
    }
  }
};

const updateUserInfo = async (data: Data) => {
  try {
    await axios.patch(
      `/api/users/update`,
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
    alert("회원정보가 수정되었습니다.");
    window.location.replace("/mypage/statistics");
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      alert(`${err.response?.data.reason}`);
    }
  }
};

const deleteUserInfo = async () => {
  await axios.delete("/api/users/delete", {
    headers: {
      authorization: `Bearer ${userToken}`,
    },
  });
  alert("회원정보가 안전하게 삭제되었습니다.");
  window.location.replace("/");
};

const userLogin = async (data: Data) => {
  try {
    const res = await axios.post("/api/guest/login", data);
    const userToken = res.data;
    sessionStorage.setItem("userToken", userToken);
    alert("로그인이 완료되었습니다.");
    window.location.replace("/");
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      alert(`이메일 또는 비밀번호가 일치하지 않습니다.`);
    }
  }
};

const kakaoLogin = async (code: any) => {
  try {
    await axios.get(`/api/auth/kakao/login?code=${code}`);
  } catch {
    console.log("카카오 로그인 실패");
  }
};

export {
  getUsersInfo,
  updateUserInfo,
  createUserInfo,
  deleteUserInfo,
  userLogin,
  kakaoLogin,
};
