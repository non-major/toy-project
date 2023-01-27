import React, { useState, Dispatch, SetStateAction } from "react";
import Modal from "../Modal/Modal";
import styled from "styled-components";
import closeBtnImg from "../../asset/silver-close-button-png.png";
import {
  ReportModalTitle,
  ReportContentBookTitle,
} from "./ContentReportModal.styles";
import ReportModalReasonForm from "./ContentReportModalReasonForm";

type ReportModalProps = {
  setModalState: Dispatch<SetStateAction<boolean>>;
};

const ReportModal = (props: ReportModalProps) => {
  return (
    <Modal title="신고하기" setModalState={props.setModalState}>
      <ModalCloseWrapper>
        {/* <ModalCloseBtn onClick={() => props.setIsReportModalOpen(false)}>
          <img src={closeBtnImg} width="25" alt="창 닫기" />
        </ModalCloseBtn> */}
      </ModalCloseWrapper>
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

const ModalCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalCloseBtn = styled.button`
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;
