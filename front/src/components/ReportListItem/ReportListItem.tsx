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
  id,
  image,
  nickname,
  title,
  content,
  setIsOpenModal,
  setSelectedPostId,
}: ReportListItemProps) => {
  return (
    <Container
      onClick={() => {
        setIsOpenModal(true);
        setSelectedPostId(id);
      }}>
      <Section>
        <BookImage src={image}></BookImage>
      </Section>
      <Section>
        <Title>{title}</Title>
        {/* <Nickname>@{nickname}</Nickname> */}
        <Content>{content}</Content>
      </Section>
    </Container>
  );
};
