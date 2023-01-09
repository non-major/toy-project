import styled from "styled-components";

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > div {
    margin-bottom: 15px;
  }

  .contentAuthor {
    color: grey;
    font-weight: bolder;
    margin: 10px;
  }
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    display: block;
  }
  .contentTitle {
    font-size: 2em;
    font-weight: bold;
  }
  .contentDate {
    color: grey;
  }
`;

const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const ContentSubstance = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #e2e2e2;
`;

export { ContentWrap, ContentTitle, ContentImg, ContentSubstance };
