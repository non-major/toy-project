import styled from "styled-components";

export const ItemListStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  .item {
    margin: 40px 1.5% 0 1.5%;
  }

  .item span {
    cursor: default;
  }

  .item a {
    text-decoration: none;
    color: black;
  }

  .img {
    width: 100%;
    height: 40vh;
    margin: 5px 0 5px 0;
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    height: 45px;
    line-height: 22px;
    word-break: break-all;
  }
`;
