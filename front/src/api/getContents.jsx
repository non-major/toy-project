import axios from "axios";

const getData = async (all, page, dateSort, commentSort) => {
  try {
    const mySort = commentSort !== "" ? "comment=desc" : `order=${dateSort}`;

    const headObj = all
      ? ""
      : {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
          },
        };

    const url = all
      ? `/api/post/postList/${page}?order=${dateSort}`
      : `/api/post/myPostList/${page}?${mySort}`;

    const response = await axios.get(url, headObj).then((res) => {
      if (res.length === 1) {
        return {
          response: [],
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
    alert(`문제가 발생했습니다. 다시 시도해 주세요. ${err.message}`);
  }
};

export default getData;
