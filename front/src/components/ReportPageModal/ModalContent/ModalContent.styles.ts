import styled from "styled-components";
import theme from "../../../styles/Theme";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReporterList = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 10px;
`;

const Reporter = styled.div`
  width: 50%;
  text-align: center;
`;

const Reason = styled.div`
  width: 50%;
  text-align: center;
`;

const DeleteButton = styled.button`
  background: ${theme.color.lightblue};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.lightskyblue};
  }
`;

export { Container, ReporterList, Reporter, Reason, DeleteButton };
