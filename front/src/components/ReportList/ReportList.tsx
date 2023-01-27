import axios from "axios";
import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  memo,
} from "react";
import { ReportContainer } from "./ReportList.styles";
import { ReportListItem } from "../ReportListItem/ReportListItem";

interface ReportListProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setSelectedPostId: Dispatch<SetStateAction<number | null>>;
}

export interface ReportListItemProps {
  postId: number;
  bookImageURL: string;
  nickname: string;
  title: string;
  content: string;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setSelectedPostId: Dispatch<SetStateAction<number | null>>;
}

export const ReportList = memo(
  ({ setIsOpenModal, setSelectedPostId }: ReportListProps) => {
    const [reports, setReports] = useState<ReportListItemProps[]>([]);

    const getReports = () => {
      axios
        .get("/api/reports")
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          setReports(data);
        });
    };

    useEffect(() => {
      getReports();
    }, []);

    return (
      <ReportContainer>
        {reports.map((report) => {
          const postId = report.postId;
          const bookImageURL = report.bookImageURL;
          const nickname = report.nickname;
          const title = report.title;
          const content = report.content;
          return (
            <ReportListItem
              key={postId}
              postId={postId}
              bookImageURL={bookImageURL}
              nickname={nickname}
              title={title}
              content={content}
              setIsOpenModal={setIsOpenModal}
              setSelectedPostId={setSelectedPostId}
            />
          );
        })}
      </ReportContainer>
    );
  },
);
