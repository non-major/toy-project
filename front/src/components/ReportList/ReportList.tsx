import axios from "axios";
import React, { useState, useEffect } from "react";
import { ReportContainer } from "./ReportList.styles";
import { ReportListItem } from "../ReportListItem/ReportListItem";

export interface ReportType {
  postId: number;
  bookImageURL: string;
  nickname: string;
  title: string;
  content: string;
}

export const ReportList = () => {
  const [reports, setReports] = useState<ReportType[]>([]);

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
      {reports.map((report, idx) => {
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
          />
        );
      })}
    </ReportContainer>
  );
};
