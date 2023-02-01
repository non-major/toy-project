import axios from "axios";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  Container,
  ReporterList,
  Reporter,
  Reason,
  DeleteButton,
} from "./ModalContent.styles";
import { reasons } from "../../ContentReportModal/ContentReportModalReasonForm";

interface ModalContentType {
  selectedPostId: string | null;
  setModalState: Dispatch<SetStateAction<boolean>>;
}

export interface ReportListType {
  id: string;
  userId: string;
  type: number;
}

const ModalContent = ({ selectedPostId, setModalState }: ModalContentType) => {
  const [reportList, setReportList] = useState<ReportListType[]>([]);

  useEffect(() => {
    axios.get(`/api/reports/${selectedPostId}`).then((res) => {
      setReportList(res.data);
    });
  }, [selectedPostId]);

  return (
    <Container>
      {reportList.map((list) => {
        return (
          <ReporterList key={list.id}>
            <Reporter>익명{list.userId}</Reporter>
            <Reason>{reasons[list.type - 1].reasonType}</Reason>
          </ReporterList>
        );
      })}
      <DeleteButton
        onClick={() => {
          axios
            .delete(`/api/reports/${selectedPostId}`)
            .then((res) => console.log(res));
          setModalState(false);
        }}>
        게시글 삭제
      </DeleteButton>
    </Container>
  );
};

export default ModalContent;
