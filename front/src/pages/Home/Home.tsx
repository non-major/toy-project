import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Ranking from "../../components/Ranking/Ranking";
import getData from "../../api/getContents";
import ItemList from "../../components/ItemList/ItemList";
import CreateBtn from "../../components/CreateBtn/CreateBtn";
import Carousel from "../../components/Carousel/Carousel";
import { Division } from "./Home.styles";
import { useInfiniteQuery, useQuery } from "react-query";

interface Item {
  id: string;
  userId: number;
  nickname: string;
  image: string;
  title: string;
}

interface Data {
  response: Item[];
  totalCount: number;
}

const Home = () => {
  // 받아오는 데이터를 배열 모양으로 바꾸어 <ItemList> 컴포넌트에 주입하기 위해 필요한 state
  const [contents, setContents] = useState<Item[]>([]);
  //무한스크롤을 위한 쿼리 > 조건에 따라 데이터를 받아 축적? 해줌
  const { status, data, hasNextPage, fetchNextPage } = useInfiniteQuery<Data>(
    ["posts"],
    ({ pageParam = 1 }) => getData(true, pageParam, "desc", ""),
    {
      getNextPageParam: (lastPage, allPages) => {
        // 전체 페이지 수(전체 게시물 갯수를 개별 단위로 나눠 몇 번까지 받아야 하는지 계산 > 페이지네이션 원리와 같음)
        // 다음 페이지 수 설정
        const maxPages = lastPage.totalCount / 9 + 1;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    },
  );

  // 데이터에 바로 map을 적용하여 렌더링 하면 필요없는 쿼리
  // 데이터를 배열 모양으로 바꾸어 <ItemList> 컴포넌트에 주입해 줄 경우 초기값(페이지 1)이 반영 안됨
  // 초기값 설정을 위해
  const { data: firstData } = useQuery(["posts", contents], () =>
    getData(true, 1, "desc", ""),
  );

  useEffect(() => {
    // 초기값 주입
    if (contents.length < 10) {
      if (firstData !== undefined) {
        setContents(firstData.response);
      }
    }

    // 뷰로 계산하지 않고 스크롤 높이로 계산하는 방법 선택함
    // 스크롤이 일정 위치로 내려가면 다음 값을 받아오는 원리로 설계
    // 뷰 크기에 따라 다음 목록이 없는 부분이 일부 보일 수 있는 단점이 있음
    let fetching = false;
    const onScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) {
          await fetchNextPage();
          fetching = false;
        }

        if (data !== undefined) {
          let newData: Item[] = [];
          data.pages.map((list) => {
            newData = newData.concat(list.response);
          });
          setContents(newData);
        }
      }
    };
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [data, fetchNextPage, hasNextPage, status, contents, firstData]);

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
