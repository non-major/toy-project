import axios from "axios";

const getData = async (page, dateSort, commentSort) => {
  try {
    const comment = commentSort !== "";
    const response = await axios
      .get(
        `/api/postList/${page}?${
          comment ? "comment=desc" : ""
        }&orderType=${dateSort}`,
      )
      .then((res) => {
        return {
          response: res.data.slice(0, 9),
          total: res.data[9].totalCount,
        };
      });

    return response;
  } catch (err) {
    alert(`문제가 발생했습니다. 다시 시도해 주세요. ${err.message}`);
  }
};

export default getData;
