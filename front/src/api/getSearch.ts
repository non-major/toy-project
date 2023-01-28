import axios from "axios";

const getSearch = async (
  page: number,
  keyword: string,
): Promise<{ response: []; totalCount: number }> => {
  try {
    const url = `/api/posts/search/post?search=${keyword}&page=${page}`;
    const response = await axios.get(url).then((res) => {
      if (res.data.post.length === 0) {
        return {
          response: [],
          totalCount: 9,
        };
      } else {
        return {
          response: res.data.post,
          totalCount: res.data.totalCount.count,
        };
      }
    });

    return response;
  } catch (err) {
    console.log(err);
    alert(`문제가 발생했습니다. 다시 시도해 주세요.`);
    return { response: [], totalCount: 0 };
  }
};

export default getSearch;
