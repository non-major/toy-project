import { Link } from "react-router-dom";
import styled from "styled-components";

const EmptyChart = styled.div`
  width: 600px;
  height: 380px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.lightGray};
  border-radius: 7px;
  margin-left: 20px;
  font-size: 18px;
`;

const EmptyText = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const EmptyNewLink = styled(Link)`
  height: 20%;
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export { EmptyChart, EmptyNewLink, EmptyText };
