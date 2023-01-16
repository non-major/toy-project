import styled from "styled-components";

const MypageBox = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LevelBox = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Level = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2.3rem;
  font-weight: 700;
`;

const ChartBox = styled.h2`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const Sidebar = styled.div`
//   padding-top: 5%;
//   border-right: 1px solid gray;
//   padding-right: 5%;
//   white-space: nowrap;

//   @media (max-width: 768px) {
//     border: none;
//     padding-bottom: 5%;
//     border-bottom: 1px solid gray;
//   }
// `;

// const Menu = styled.li`
//   font-size: 1.2rem;
//   margin-top: 20px;
//   cursor: pointer;

//   &.activeMenu {
//     font-weight: 800;
//   }
// `;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% 0 5% 0;
`;

const RemoveUserBox = styled.div`
  font-size: 16px;
`;

const RemoveUser = styled.div`
  cursor: pointer;
  font-weight: 700;
  margin-top: 7px;
`;

export {
  MypageBox,
  LevelBox,
  Level,
  ChartBox,
  // Sidebar,
  // Menu,
  Content,
  RemoveUserBox,
  RemoveUser,
};
