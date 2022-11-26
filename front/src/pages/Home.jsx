import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Pagination from "react-js-pagination";

const Home = () => {
  const [page, setPage] = useState(1);
  const [contents, setContents] = useState([]);

  const fetchUsers = async ({ page, count }) => {
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=${count}`,
      );

      return response;
    } catch (err) {
      alert(`문제가 발생했습니다. 다시 시도해 주세요. ${err.message}`);
    }
  };

  useEffect(() => {
    const datas = fetchUsers({ page: 1, count: 9 });
    console.log(datas);
    setContents(dummyData);
  }, []);

  const dummyData = [
    {
      id: 1,
      img: "https://picsum.photos/150/200",
      user: "jiyun",
      title: "책책책 책을 읽읍시다.책책책 책을 읽읍시다.책책책 책을 읽읍시다.",
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
      title: "책책책 책을 읽읍시다.책책책 책을 읽읍시다.책책책 책을 읽읍시다.",
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
    {
      id: 11,
      img: "https://picsum.photos/150/200",
      user: "jiyun",
      title: "책읽음",
    },
  ];

  const handlePageChange = (page) => {
    const datas = fetchUsers({ page, count: 9 });
    console.log(datas);
    setContents(dummyData);
    setPage(page);
  };

  return (
    <>
      <ItemList className="itemList">
        {contents.map((content) => {
          return (
            <div className="item" key={content.id}>
              <span>@{content.user}</span>
              <a>
                <div className="img">
                  <img src="https://picsum.photos/300/400" />
                </div>
                <div className="title">{content.title}</div>
              </a>
            </div>
          );
        })}

        {/* <div className="item">
          <span>@sujung</span>
          <div className="img">
            <img src="https://picsum.photos/300/400" />
          </div>
          <div>
            책책책 책을 읽읍시다.책책책 책을 읽읍시다.책책책 책을 읽읍시다.
          </div>
        </div>
        <div className="item">
          <span>@sulji</span>
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
        <div className="item">
          <span>@jiyun</span>
          <div className="img">
            <img src="https://picsum.photos/300/400" />
          </div>
          <div>
            책책책 책을 읽읍시다.책책책 책을 읽읍시다.책책책 책을 읽읍시다.
          </div>
        </div> */}
      </ItemList>
      <Paging>
        <Pagination
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={82}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </Paging>
    </>
  );
};

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .item {
    width: 30%;
    float: left;
    margin: 40px 1.5% 0 1.5%;
  }

  .img {
    width: 100%;
    height: 320px;
    margin: 5px 0 5px 0;
  }

  .img img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }

  .title {
    height: 45px;
    line-height: 22px;
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

  .active {
    font-weight: bold;
  }
`;

export default Home;
