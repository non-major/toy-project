import styled from "styled-components";

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  > div {
    margin-bottom: 15px;
  }

  .contentAuthor {
    color: ${(props) => props.theme.color.darkGray};
    font-weight: bolder;
    margin: 10px 0 10px 0;
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
    color: ${(props) => props.theme.color.darkGray};
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
  background-color: ${(props) => props.theme.color.lightGray};
`;

const ContentReportWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.color.gray};
`;

const ContentReportBtn = styled.button`
  border: none;
  background-color: white;
  color: ${(props) => props.theme.color.darkGray};
  &:hover {
    cursor: pointer;
  }
  > span {
    margin-right: 3px;
  }
`;

export {
  ContentWrap,
  ContentTitle,
  ContentImg,
  ContentSubstance,
  ContentReportWrapper,
  ContentReportBtn,
};
