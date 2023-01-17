import styled from "styled-components";

export const Division = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin-top: 30px;
  cursor: default;

  p {
    margin-right: 10px;
  }

  .line {
    height: 8px;
    flex-grow: 1;
    border-bottom: 2px solid black;
  }

  .more {
    color: gray;
    font-size: 0.8rem;
    text-decoration: none;
    line-height: 16px;
    margin-left: 10px;
  }
`;
