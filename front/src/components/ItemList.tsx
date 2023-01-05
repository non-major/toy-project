import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Item {
  postId: string;
  userId: {
    nickname: string;
  };
  nickname: string;
  image: string;
  title: string;
}

interface ContentProps {
  contents: Item[];
}

const ItemList = ({ contents }: ContentProps) => {
  if (contents.length === 0) {
    return (
      <div style={{ margin: "40px 0 20px 0" }}>작성한 게시물이 없습니다.</div>
    );
  } else
    return (
      <ItemListStyle className="itemList">
        {contents.map((content) => {
          return (
            <div className="item" key={content.postId}>
              <span>@{content.userId.nickname}</span>
              <Link to={"/content/" + content.postId}>
                <div className="img">
                  <img src={content.image} alt={content.title} />
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

export default ItemList;
