import { instance } from "./axiosInstance";
import axios from "axios";
import { Buffer } from "buffer";
interface ReportDataType {
  id: string;
  postId: number;
  userId: number;
  type: number;
}

const token = sessionStorage.getItem("userToken");

export const isReported = async (postId: string | undefined) => {
  if (token) {
    const base64Payload: string = token.split(".")[1];
    const payload = Buffer.from(base64Payload, "base64");
    const { userId } = JSON.parse(payload.toString());

    const reportData: ReportDataType = await axios
      .get(`/api/reports/${postId}`)
      .then((res) => {
        const reportData = res.data.filter(
          (x: ReportDataType) => x.userId === parseInt(userId),
        );
        return reportData[0];
      });

    if (reportData) {
      return [true, reportData.type];
    } else {
      return [false, -1];
    }
  } else {
    return [false, -1];
  }
};

export const postReport = async (
  postId: string | undefined,
  reasonType: string,
) => {
  if (!(await isReported(postId))[0] && token) {
    instance.post(`/api/reports/${postId}`, {
      type: Number(reasonType),
    });
    alert("신고 완료되었습니다.");
  } else if (token) {
    alert("이미 신고한 게시물입니다.");
  } else {
    alert("회원 기능입니다.");
  }
};
