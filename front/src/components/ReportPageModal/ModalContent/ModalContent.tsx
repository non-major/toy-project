import axios from "axios";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  Container,
  ReporterList,
  Reporter,
  Reason,
  DeleteButton,
} from "./ModalContent.styles";

interface ModalContentType {
  selectedPostId: number | null;
  setModalState: Dispatch<SetStateAction<boolean>>;
}

export interface ReportListType {
  reporter: string;
  reason: string;
}

const ModalContent = ({ selectedPostId, setModalState }: ModalContentType) => {
  const [reportList, setReportList] = useState<ReportListType[]>([]);

  useEffect(() => {
    axios.get(`/api/reporterList/${selectedPostId}`).then((res) => {
      setReportList(res.data);
    });
  }, [selectedPostId]);

  return (
    <Container>
      {reportList.map((list) => {
        return (
          <ReporterList key={list.reporter}>
            <Reporter>{list.reporter}</Reporter>
            <Reason>{list.reason}</Reason>
          </ReporterList>
        );
      })}
      <DeleteButton
        onClick={() => {
          setModalState(false);
        }}>
        게시글 삭제
      </DeleteButton>
    </Container>
  );
};

export default ModalContent;
