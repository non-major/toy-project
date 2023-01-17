import React from "react";
import { UserType } from "../UserList/UserList";
import {
  Container,
  Nickname,
  Email,
  SignUpDate,
  Section,
  Button,
} from "./UserListItem.styles";

export const UserListItem = ({ nickname, email, signUpDate }: UserType) => {
  return (
    <Container>
      <Section>
        <Nickname>{nickname}</Nickname>
        <Email>{email}</Email>
      </Section>
      <Section>
        <SignUpDate>{signUpDate} 가입</SignUpDate>
      </Section>
      <Section>
        <Button>탈퇴</Button>
      </Section>
    </Container>
  );
};
