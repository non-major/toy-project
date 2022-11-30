import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemList = ({ contents }) => {
  return (
    <ItemListStyle className="itemList">
      {contents.map((content) => {
        return (
          <div className="item" key={content.postId}>
            <span>@{content.userId.nickname}</span>
            <Link to="/">
              <div className="img">
                <img src={content.image} alt="책 이미지" />
              </div>
              <div className="title">{content.title}</div>
            </Link>
          </div>
        );
      })}
    </ItemListStyle>
  );
};

const ItemListStyle = styled.div`
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
    height: 20vw;
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

export default ItemList;
