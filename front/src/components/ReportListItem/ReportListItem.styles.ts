import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 200px;
  min-width: 200px;
  background-color: pink;
  border-radius: 5px;
  margin: 5px;
  padding: 20px;
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
  overflow: hidden;
  text-overflow: wrap;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export { Container, BookImage, Title, Nickname, Content, Section };
