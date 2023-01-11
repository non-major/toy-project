import styled from "styled-components";

const Header = styled.header`
  min-height: 100px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15vw;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};

  img {
    height: 10vh;
    margin-left: 20px;
  }
`;

const Nav = styled.div`
  ul {
    display: flex;
  }

  ul a {
    margin: 0 10px;
    list-style: none;
    color: black;
    text-decoration: none;
  }
`;

const SearchBar = styled.div`
  height: 40%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 100px;

  input {
    width: 10vw;
    border: none;
    font-family: "S-CoreDream-4Regular";

    :focus {
      outline: white;
    }
  }

  img {
    height: 65%;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export { Header, Nav, SearchBar };
