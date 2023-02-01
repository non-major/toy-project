import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserListItem } from "../UserListItem/UserListItem";
import { UserListContainer } from "./UserList.styles";

export interface UserType {
  id: string;
  status: number;
  nickname: string;
  email: string;
  // signUpDate: string;
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
