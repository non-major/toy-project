import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import MyButton from "../MyButton";
import ButtonWrap from "../../styles/ButtonWrap";
import { ReportReasonSelect } from "./ContentReportModal.styles";
import { isReported, postReport } from "../../api/postReport";
import { useMutation, useQueryClient } from "react-query";

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

const ReportModalReasonForm = ({
  postId,
  setModalState,
}: ReportModalReasonForm) => {
  const [reasonType, setReasonType] = useState("1");
  const [reportStatus, setReportStatus] = useState(false);
  const [reportMessage, setReportMessage] = useState<string>("");

  useEffect(() => {
    (async () => {
      const [report, reportType] = await isReported(postId);
      if (report) {
        setReportStatus(true);
        setReportMessage(reasons[Number(reportType) - 1].reasonType);
      }
    })();
  }, [postId, reasonType, reportMessage]);

  const queryClient = useQueryClient();

  const mutation = useMutation(() => postReport(postId, reasonType), {
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ["reportList"],
        refetchActive: true,
      });
    },
  });

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setModalState(false);
    mutation.mutate();
  };

  return (
    <form onSubmit={onSubmit}>
      {!reportStatus ? (
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
      ) : (
        reportMessage
      )}
      <ButtonWrap>
        {!reportStatus && <MyButton btntype="submit">신고하기</MyButton>}
      </ButtonWrap>
    </form>
  );
};

export default ReportModalReasonForm;
