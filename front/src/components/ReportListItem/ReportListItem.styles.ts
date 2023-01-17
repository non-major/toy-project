import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: pink;
  border-radius: 5px;
  height: 200px;
  margin: 5px;
  padding: 20px;
  overflow: hidden;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookImage = styled.img`
  width: 150px;
  height: 200px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Nickname = styled.p`
  font-weight: bold;
  color: gray;
  margin-bottom: 10px;
`;

const Content = styled.div`
  line-height: 200%;
  height: 100%;
`;

export { Container, BookImage, Title, Nickname, Content, Section };
