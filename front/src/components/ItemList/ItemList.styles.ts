import styled from "styled-components";

export const ItemListStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  .item {
    margin: 40px 8px 0 8px;

    span {
      color: ${(props) => props.theme.color.darkGray};
      cursor: default;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  .img {
    width: 100%;
    height: 100%;
    max-height: 350px;
    margin: 5px 0 5px 0;
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .title {
    height: 45px;
    line-height: 22px;
    word-break: break-all;
  }
`;
