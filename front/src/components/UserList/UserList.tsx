import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserListItem } from "../UserListItem/UserListItem";
import { UserListContainer } from "./UserList.styles";

export interface UserType {
  userId: number;
  nickname: string;
  email: string;
  signUpDate: string;
}

const UserList = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const getUsers = () => {
    axios
      .get("/api/users")
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserListContainer>
      {users.map((user, idx) => {
        const nickname = user.nickname;
        const email = user.email;
        const userId = user.userId;
        const signUpDate = user.signUpDate;
        return (
          <UserListItem
            key={idx}
            userId={userId}
            nickname={nickname}
            email={email}
            signUpDate={signUpDate}
          />
        );
      })}
    </UserListContainer>
  );
};

export default UserList;
