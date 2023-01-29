import React, { useState, Dispatch, SetStateAction } from "react";
import MyButton from "../MyButton";
import ButtonWrap from "../../styles/ButtonWrap";
import { ReportReasonSelect } from "./ContentReportModal.styles";
import axios from "axios";

export const reasons = [
  { reasonId: 1, reasonType: "욕설, 부적절한 언어, 비방" },
  { reasonId: 2, reasonType: "음란성 게시물" },
  { reasonId: 3, reasonType: "지나친 정치/종교 논쟁" },
  { reasonId: 4, reasonType: "명예훼손, 저작권 침해" },
  { reasonId: 5, reasonType: "도배성 게시물" },
  { reasonId: 6, reasonType: "광고 및 스팸" },
];

type ReportReasons = {
  reasons: Array<{
    reasonId: number;
    reasonType: string;
  }>;
};

interface ReportModalReasonForm {
  postId: string | undefined;
  setModalState: Dispatch<SetStateAction<boolean>>;
}

const token = sessionStorage.getItem("userToken");

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const ReportModalReasonForm = ({
  postId,
  setModalState,
}: ReportModalReasonForm) => {
  const [reasonType, setReasonType] = useState("1");
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    axios.post(
      `/api/reports/${postId}`,
      {
        type: Number(reasonType),
      },
      config,
    );

    setModalState(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <ReportReasonSelect
        onChange={(e) => setReasonType(e.target.value)}
        name="reportReasons">
        {reasons.map((reason) => {
          return (
            <option key={reason.reasonId} value={reason.reasonId}>
              {reason.reasonType}
            </option>
          );
        })}
      </ReportReasonSelect>
      <ButtonWrap>
        <MyButton btntype="submit">신고하기</MyButton>
      </ButtonWrap>
    </form>
  );
};

export default ReportModalReasonForm;
