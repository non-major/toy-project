import axios from "axios";
import { UserListItem } from "../UserListItem/UserListItem";
import { UserListContainer } from "./UserList.styles";
import { useQuery } from "react-query";

export interface UserType {
  id: string;
  status: number;
  nickname: string;
  email: string;
}

type User = {
  id: string;
  status: number;
  nickname: string;
  email: string;
};

const fetchUserList = async () => {
  const data = await axios.get("/api/users").then((res) => {
    return res.data;
  });
  return data;
};

const UserList = () => {
  const { isLoading, isError, data } = useQuery<User[]>(
    "userList",
    fetchUserList,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      onSuccess: () => {},
    },
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>데이터 요청 실패</span>;
  }

  return (
    <UserListContainer>
      {data &&
        data.map((user) => {
          const { id, nickname, email, status } = user;

          return (
            <UserListItem
              key={email}
              id={id}
              nickname={nickname}
              email={email}
              status={status}
            />
          );
        })}
    </UserListContainer>
  );
};

export default UserList;
