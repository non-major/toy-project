import styled from "styled-components";
import theme from "../../styles/Theme";

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr 1fr;
  background-color: ${theme.color.iceblue};
  border-radius: 5px;
  height: 70px;
  margin: 5px;
  padding: 10px;
`;

const Nickname = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Email = styled.p``;

const SignUpDate = styled.p`
  color: gray;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  background-color: ${theme.color.lightblue};
  border: none;
  border-radius: 5px;
  width: 100%;

  &:hover {
    background-color: ${theme.color.lightskyblue};
    cursor: pointer;
  }
`;

export { Container, Nickname, Email, SignUpDate, Section, Button };
