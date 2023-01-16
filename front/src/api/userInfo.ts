import axios from "axios";

const userToken = sessionStorage.getItem("userToken");

interface Data {
  email?: string;
  nickname?: string;
  password: string;
}

const getUsersInfo = async () => {
  try {
    const user = await axios.get(`/api/user/myInfo`, {
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
    await axios.post("/api/user/register", {
      email: data.email,
      password: data.password,
      nickname: data.nickname,
    });
    alert("회원가입이 완료되었습니다.");
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      alert(`${err.response?.data.reason}`);
    }
  }
};

const updateUserInfo = async (data: Data) => {
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
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      alert(`${err.response?.data.reason}`);
    }
  }
};

const deleteUserInfo = async () => {
  await axios.delete("/api/user/delete", {
    headers: {
      authorization: `Bearer ${userToken}`,
    },
  });
  alert("회원정보가 안전하게 삭제되었습니다.");
};

const userLogin = async (data: Data) => {
  try {
    const res = await axios.post("/api/user/login", data);
    const userToken = res.data.token;
    sessionStorage.setItem("userToken", userToken);
    alert("로그인이 완료되었습니다.");
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      alert(`${err?.response?.data.reason}`);
    }
  }
};

export {
  getUsersInfo,
  updateUserInfo,
  createUserInfo,
  deleteUserInfo,
  userLogin,
};
