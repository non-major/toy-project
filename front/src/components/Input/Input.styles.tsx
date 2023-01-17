import styled from "styled-components";

export const BasicInput = styled.input`
  width: 500px;
  height: 30px;
  margin-top: 10px;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 8px;
  &:focus {
    outline: 2px solid #003c8f;
  }
`;
