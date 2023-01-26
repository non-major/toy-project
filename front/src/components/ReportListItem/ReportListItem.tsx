import React from "react";
import { ReportListItemProps } from "../ReportList/ReportList";
import {
  Container,
  BookImage,
  Title,
  Nickname,
  Content,
  Section,
} from "./ReportListItem.styles";

export const ReportListItem = ({
  postId,
  bookImageURL,
  nickname,
  title,
  content,
  setIsOpenModal,
}: ReportListItemProps) => {
  return (
    <Container onClick={() => setIsOpenModal(true)}>
      <Section>
        <BookImage src={bookImageURL}></BookImage>
      </Section>
      <Section>
        <Title>{title}</Title>
        <Nickname>@{nickname}</Nickname>
        <Content>{content}</Content>
      </Section>
    </Container>
  );
};
