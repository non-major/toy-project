import React from "react";
import { deleteUserForAdmin } from "../../api/deleteUserForAdmin";
import { UserType } from "../UserList/UserList";
import {
  Container,
  Nickname,
  Email,
  SignUpDate,
  Section,
  Button,
} from "./UserListItem.styles";

export const UserListItem = ({ id, nickname, email, status }: UserType) => {
  return (
    <Container>
      <Section>
        <Nickname>{nickname}</Nickname>
        <Email>{email}</Email>
      </Section>
      <Section>{status === 1 ? "관리자" : "회원"}</Section>
      <Section>
        <Button onClick={() => deleteUserForAdmin(id)}>삭제</Button>
      </Section>
    </Container>
  );
};
