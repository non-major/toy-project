import styled from "styled-components";

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;

  .commentInput {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    > input {
      width: 90%;
      height: 30px;
      padding: 5px;
      margin: 0 10px 0 0;
    }
    > button {
      background-color: #1565e0;
      width: 60px;
      border: none;
      padding: 10px;
      color: white;
      border-radius: 5px;
      font-family: "S-CoreDream-4Regular";
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const CommentAuthor = styled.span`
  font-weight: bold;
`;

export const CommentContent = styled.span`
  display: block;
  padding: 10px 0;
`;

export const CommentModifyButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin-right: 5px;
  color: ${(props) => props.theme.color.darkGray};
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const CommentCreatedDate = styled.div`
  color: ${(props) => props.theme.color.darkGray};
  font-size: small;
  margin-bottom: 5px;
`;
