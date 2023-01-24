import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserListItem } from "../UserListItem/UserListItem";
import { UserListContainer } from "./UserList.styles";

export interface UserType {
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
      {users.map((user) => {
        const nickname = user.nickname;
        const email = user.email;
        const signUpDate = user.signUpDate;
        return (
          <UserListItem
            key={email}
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