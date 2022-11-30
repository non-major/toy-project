import axios from "axios";

const getData = async (page, count, callback) => {
  try {
    const response = await axios
      .get(`https://randomuser.me/api/?page=${page}&results=${count}`)
      .then((res) => {
        return res.data.results;
      });

    return callback(response);
  } catch (err) {
    alert(`문제가 발생했습니다. 다시 시도해 주세요. ${err.message}`);
  }
};

export default getData;
