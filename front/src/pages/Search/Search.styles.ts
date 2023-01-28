import styled from "styled-components";

const Division = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin-top: 50px;

  p {
    margin-right: 10px;
  }

  .line {
    height: 8px;
    flex-grow: 1;
    border-bottom: 2px solid black;
  }
`;

const Nav = styled.nav`
  width: 100%;
  margin: 20px 0 10px 0;

  ul {
    display: flex;
    justify-content: flex-end;
  }

  ul li {
    cursor: default;
  }

  .point {
    cursor: pointer;
  }

  ul > li {
    margin-left: 10px;
  }
`;

const Paging = styled.div`
  margin: 50px 0 50px 0;

  .pagination {
    display: flex;
    justify-content: center;
  }

  .pagination li {
    width: 30px;
  }

  .pagination li a {
    color: black;
    text-decoration: none;
  }

  .active {
    font-weight: bold;
  }
`;

export { Paging, Division, Nav };
