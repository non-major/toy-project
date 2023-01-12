import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Ranking from "../../components/Ranking/Ranking";
import getData from "../../api/getContents";
import ItemList from "../../components/ItemList/ItemList";
import CreateBtn from "../../components/CreateBtn/CreateBtn";
import Carousel from "../../components/Carousel/Carousel";
import { Division } from "./Home.styles";
import { useInfiniteQuery, useQuery } from "react-query";

interface Item {
  postId: string;
  userId: {
    nickname: string;
  };
  nickname: string;
  image: string;
  title: string;
}

interface Data {
  response: Item[];
  totalCount: number;
}

const Home = () => {
  const [contents, setContents] = useState<Item[]>([]);
  const { status, data, hasNextPage, fetchNextPage } = useInfiniteQuery<Data>(
    "contents",
    ({ pageParam = 1 }) => getData(true, pageParam, "desc", ""),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.totalCount / 9;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    },
  );

  useEffect(() => {
    const onScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;

      if (
        status === "success" &&
        scrollHeight - scrollTop <= clientHeight * 1.5
      ) {
        if (hasNextPage) {
          await fetchNextPage();
        }
      }
    };
    document.addEventListener("scroll", onScroll);
    data
      ? setContents((current) => current.concat(data.pages[0].response))
      : undefined;
    return () => document.removeEventListener("scroll", onScroll);
  }, [data, fetchNextPage, hasNextPage, status]);

  console.log(data);
  return (
    <>
      <Carousel />

      <Division>
        <p>독서 왕 👑</p>
        <div className="line"></div>
      </Division>
      <Ranking />

      <Division>
        <p>전체 기록 보기</p>
        <div className="line"></div>
        <Link to="/all" className="more">
          {"more >"}
        </Link>
      </Division>
      <ItemList contents={contents} />

      <CreateBtn />
    </>
  );
};

export default Home;
