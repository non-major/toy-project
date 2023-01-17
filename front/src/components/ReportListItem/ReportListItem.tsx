import React from "react";
import { ReportType } from "../ReportList/ReportList";
import {
  Container,
  BookImage,
  Title,
  Nickname,
  Content,
  Section,
} from "./ReportListItem.styles";

const contentTruncate = (content: string): string => {
  return content.length > 100 ? content.substring(0, 100) + " ..." : content;
};

export const ReportListItem = ({
  postId,
  bookImageURL,
  nickname,
  title,
  content,
}: ReportType) => {
  return (
    <Container>
      <Section>
        <BookImage src={bookImageURL}></BookImage>
      </Section>
      <Section>
        <Title>{title}</Title>
        <Nickname>@{nickname}</Nickname>
        <Content>{contentTruncate(content)}</Content>
      </Section>
    </Container>
  );
};
