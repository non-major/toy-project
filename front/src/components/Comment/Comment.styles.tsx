import styled from "styled-components";

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  .commentTitle {
    padding: 10px 0;
    border-bottom: 1px solid black;
  }
  .commentContent {
    > span {
      display: block;
      padding: 10px 0;
    }

    .commentAuthor {
      font-weight: bolder;
    }
  }

  .commentButton {
    margin-bottom: 10px;
    > a {
      display: inline-block;
      margin-right: 10px;
      font-size: 0.8rem;
      color: grey;
      text-decoration: underline;
    }
  }

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
