import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal/Modal";
import {
  ReportModalTitle,
  ReportContentBookTitle,
} from "./ContentReportModal.styles";
import ReportModalReasonForm from "./ContentReportModalReasonForm";

type ReportModalProps = {
  postId: string | undefined;
  postTitle: string;
  setModalState: Dispatch<SetStateAction<boolean>>;
};

const ReportModal = (props: ReportModalProps) => {
  return (
    <Modal title="신고하기" setModalState={props.setModalState}>
      <ReportModalTitle>신고 게시글</ReportModalTitle>
      <ReportContentBookTitle>{props.postTitle}</ReportContentBookTitle>
      <ReportModalTitle>신고 사유</ReportModalTitle>
      <ReportModalReasonForm
        postId={props.postId}
        setModalState={props.setModalState}
      />
    </Modal>
  );
};

export default ReportModal;
