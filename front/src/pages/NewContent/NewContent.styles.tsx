import styled from "styled-components";

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const TitleInput = styled.input`
  width: 500px;
  height: 30px;
  margin: 10px 0;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 8px;
  font-family: "S-CoreDream-4Regular";
  &:focus {
    outline: 2px solid #003c8f;
  }
`;

const ContentInput = styled.textarea`
  width: 500px;
  height: 300px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 8px;
  font-family: "S-CoreDream-4Regular";
  &:focus {
    outline: 2px solid #003c8f;
  }
`;
const ImgSearchInput = styled(TitleInput)`
  width: 400px;
  margin-right: 20px;
`;

export { TitleInput, TitleWrap, ContentInput, ImgSearchInput };
