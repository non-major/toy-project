import axios from "axios";

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
      if (err.response.status === 500) {
        alert(`이 이메일은 현재 사용중입니다.다른 이메일을 입력해 주세요.`);
      }
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
  } catch (err) {
    alert(`회원정보를 수정할 수 없습니다.`);
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
    sessionStorage.setItem("userToken", res.data);
    alert("로그인이 완료되었습니다.");
    window.location.replace("/");
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 500) {
        alert(`이메일 또는 비밀번호가 일치하지 않습니다.`);
      }
    }
  }
};

const kakaoLogin = async (code: any) => {
  try {
    const res = await axios.get(`/api/auth/kakao/login?code=${code}`);
    sessionStorage.setItem("userToken", res.data.accessToken);
    sessionStorage.setItem("role", res.data.role);
    window.location.replace("/");
  } catch (err) {
    alert("카카오 로그인 실패");
  }
};

const kakaoUpdate = async (data: Data) => {
  try {
    await axios.patch(
      `/api/users/kakao/update`,
      {
        nickname: data.nickname,
      },
      {
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      },
    );
    alert("회원정보가 수정되었습니다.");
    window.location.replace("/mypage/statistics");
  } catch (err) {
    alert(`회원정보를 수정할 수 없습니다.`);
  }
};
export {
  getUsersInfo,
  updateUserInfo,
  createUserInfo,
  deleteUserInfo,
  userLogin,
  kakaoLogin,
  kakaoUpdate,
};
