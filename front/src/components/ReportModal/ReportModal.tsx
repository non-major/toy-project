import React from "react";
import Modal from "../Modal/Modal";

import { ReportModalTitle, ReportContentBookTitle } from "./ReportModal.styles";
import ReportModalReasonForm from "./ReportModalReasonForm";

const ReportModal = () => {
  // useState에 신고 게시글 title, reason 담기
  // => params id에 맞는 게시글 제목 가져와야함
  // Content 페이지에서 Modal 렌더링하면 제목 prop으로 받든지 해서 가져올 수 있을 것 같은데
  // 그러려면 일단 Layout부터 해결해야함.. (모달이 헤더랑 푸터 전체에 덮이게)

  // ReportContent 파일 따로 만들면
  // 제목이랑 onSubmit 함수를 같이 prop으로 내려줘야 되나
  // 아니 제목만 내려줘도 되려나
  return (
    <Modal title="신고하기">
      <ReportModalTitle>신고 게시글</ReportModalTitle>
      <ReportContentBookTitle>
        우리가 빛의 속도로 갈 수 없다면
      </ReportContentBookTitle>
      <ReportModalTitle>신고 사유</ReportModalTitle>
      <ReportModalReasonForm />
    </Modal>
  );
};

export default ReportModal;
