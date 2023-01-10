import styled from "styled-components";

export const ItemListStyle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .item {
    width: 30%;
    height: 100%;
    overflow: hidden;
    float: left;
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
    height: 22vw;
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
