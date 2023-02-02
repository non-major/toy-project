import axios from "axios";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { UserListItem } from "../UserListItem/UserListItem";
import { UserListContainer } from "./UserList.styles";

export interface UserType {
  id: string;
  status: number;
  nickname: string;
  email: string;
  setRefresh: Dispatch<SetStateAction<number>>;
  // signUpDate: string;
}

const UserList = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [refresh, setRefresh] = useState(1);

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
  }, [refresh]);

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
            setRefresh={setRefresh}
          />
        );
      })}
    </UserListContainer>
  );
};

export default UserList;
