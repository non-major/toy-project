import axios from "axios";

const getData = async (
  all: boolean,
  page: number,
  dateSort: string,
  commentSort: string,
): Promise<{ response: []; totalCount: number }> => {
  try {
    const allContents = all ? "" : "/myInfo";
    const sort =
      dateSort === "desc" ? "desc" : commentSort === "" ? "asc" : "comment";

    const headObj: object = all
      ? {}
      : {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
          },
        };
    console.log(page);
    const url = `/api/posts${allContents}/order/${sort}?page=${page}`;

    const response = await axios.get(url, headObj).then((res) => {
      console.log("합쳐서", url, page, res);
      if (res.data.post.length === 1) {
        return {
          response: [],
          totalCount: 0,
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

export default getData;
