import { ReportListItemProps } from "../ReportList/ReportList";
import {
  Container,
  BookImage,
  Title,
  Content,
  Section,
} from "./ReportListItem.styles";

export const ReportListItem = ({
  id,
  image,
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
        <Content>{content}</Content>
      </Section>
    </Container>
  );
};
