import React, { Dispatch, SetStateAction, memo } from "react";
import { ReportContainer } from "./ReportList.styles";
import { ReportListItem } from "../ReportListItem/ReportListItem";
import { instance } from "../../api/axiosInstance";
import { useQuery } from "react-query";

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

type Report = {
  id: string;
  title: string;
  content: string;
  nickname: string;
  image: string;
};

const fetchReportList = async () => {
  const data = await instance.get("/api/reports/reportedList").then((res) => {
    return res.data;
  });
  return data;
};

export const ReportList = memo(
  ({ setIsOpenModal, setSelectedPostId }: ReportListProps) => {
    const { isLoading, isError, data } = useQuery<Report[]>(
      "reportList",
      fetchReportList,
      {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        onSuccess: () => {},
      },
    );

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (isError) {
      return <span>데이터 요청 실패</span>;
    }

    return (
      <ReportContainer>
        {data &&
          data.map((report) => {
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
