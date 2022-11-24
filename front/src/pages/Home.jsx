import React from "react";
import styled from "styled-components";

const dummyData = [
  {
    id: 1,
    img: "https://picsum.photos/150/200",
    user: "jiyun",
    title: "12",
  },
  {
    id: 2,
    img: "https://picsum.photos/150/200",
    user: "june",
    title: "13",
  },
  {
    id: 3,
    img: "https://picsum.photos/150/200",
    user: "jiyun",
    title: "14",
  },
  {
    id: 4,
    img: "https://picsum.photos/150/200",
    user: "jiyun",
    title: "15",
  },
  {
    id: 5,
    img: "https://picsum.photos/150/200",
    user: "jiyun",
    title: "16",
  },
  {
    id: 6,
    img: "https://picsum.photos/150/200",
    user: "jiyun",
    title: "책읽음",
  },
  {
    id: 7,
    img: "https://picsum.photos/150/200",
    user: "jiyun",
    title: "책읽음",
  },
  {
    id: 8,
    img: "https://picsum.photos/150/200",
    user: "jiyun",
    title: "책읽음",
  },
  {
    id: 9,
    img: "https://picsum.photos/150/200",
    user: "jiyun",
    title: "책읽음",
  },
  {
    id: 10,
    img: "https://picsum.photos/150/200",
    user: "jiyun",
    title: "책읽음",
  },
];

const Home = () => {
  return (
    <ItemList className="itemList">
      <div className="item">
        <span>@jiyun</span>
        <div className="img">
          <img src="https://picsum.photos/300/400" />
        </div>
        <div>
          책책책 책을 읽읍시다.책책책 책을 읽읍시다.책책책 책을 읽읍시다.
        </div>
      </div>
      <div className="item">
        <span>@jiyun</span>
        <div className="img">
          <img src="https://picsum.photos/300/400" />
        </div>
        <div>
          책책책 책을 읽읍시다.책책책 책을 읽읍시다.책책책 책을 읽읍시다.
        </div>
      </div>
      <div className="item">
        <span>@jiyun</span>
        <div className="img">
          <img src="https://picsum.photos/300/400" />
        </div>
        <div>
          책책책 책을 읽읍시다.책책책 책을 읽읍시다.책책책 책을 읽읍시다.
        </div>
      </div>
    </ItemList>
  );
};

const ItemList = styled.div`
  width: 50vw;

  .item {
    width: 250px;
    margin: 0 10px 0 10px;
    float: left;
  }

  .img {
    width: 250px;
    height: 320px;
    margin: 5px 0 5px 0;
  }

  .img img {
    width: 250px;
    height: 320px;
    object-fit: cover;
  }
`;

export default Home;
