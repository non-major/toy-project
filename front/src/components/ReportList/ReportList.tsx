import axios from "axios";
import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useContext,
  memo,
} from "react";
import { ReportContainer } from "./ReportList.styles";
import { ReportListItem } from "../ReportListItem/ReportListItem";
import { instance } from "../../api/axiosInstance";
import { RefreshContext } from "../../pages/Admin/Admin";

interface ReportListProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setSelectedPostId: Dispatch<SetStateAction<string | null>>;
}

export interface ReportListItemProps {
  id: string;
  image: string;
  nickname: string;
  title: string;
  content: string;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setSelectedPostId: Dispatch<SetStateAction<string | null>>;
}

export const ReportList = memo(
  ({ setIsOpenModal, setSelectedPostId }: ReportListProps) => {
    const [reports, setReports] = useState<ReportListItemProps[]>([]);
    const refresh = useContext(RefreshContext);

    const getReports = async () => {
      await instance
        .get("/api/reports/reportedList")
        .then((res) => res.data)
        .then((data) => {
          setReports(data);
        });
    };

    useEffect(() => {
      getReports();
    }, [refresh]);

    return (
      <ReportContainer>
        {reports.map((report) => {
          const id = report.id;
          const image = report.image;
          const nickname = report.nickname;
          const title = report.title;
          const content = report.content;
          return (
            <ReportListItem
              key={id}
              id={id}
              image={image}
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
