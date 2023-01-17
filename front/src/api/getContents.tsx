import axios from "axios";

const getData = async (
  all: boolean,
  page: number,
  dateSort: string,
  commentSort: string,
): Promise<{ response: []; totalCount: number }> => {
  try {
    const mySort = commentSort !== "" ? "comment=desc" : `order=${dateSort}`;

    const headObj: object = all
      ? {}
      : {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
          },
        };

    const url = all
      ? `/api/post/postList/${page}?order=${dateSort}`
      : `/api/post/myPostList/${page}?${mySort}`;

    const response = await axios.get(url, headObj).then((res) => {
      if (res.data.length === 1) {
        return {
          response: [],
          totalCount: 0,
        };
      } else {
        return {
          response: res.data.slice(0, -1),
          totalCount: res.data.slice(-1)[0].totalCount,
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

export default getData;
