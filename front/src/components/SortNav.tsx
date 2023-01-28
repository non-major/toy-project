import React from "react";

interface SortNavProps {
  all: boolean;
  dateSort: string;
  commentSort: string;
  setDateSort: React.Dispatch<React.SetStateAction<string>>;
  setCommentSort: React.Dispatch<React.SetStateAction<string>>;
}

const SortNav = ({
  all,
  dateSort,
  commentSort,
  setDateSort,
  setCommentSort,
}: SortNavProps) => {
  const MemberNav = () => {
    return (
      <ul>
        <li
          className={
            dateSort === "desc" && commentSort !== "desc"
              ? "point bold"
              : "point"
          }
          onClick={() => {
            setDateSort("desc");
            setCommentSort("");
          }}>
          최신순
        </li>
        <li>|</li>
        <li
          className={dateSort === "desc" ? "point" : "point bold"}
          onClick={() => {
            setDateSort("asc");
            setCommentSort("");
          }}>
          오래된 순
        </li>
        <li>|</li>
        <li
          className={
            commentSort === "desc"
              ? dateSort === "desc"
                ? "point bold"
                : "point"
              : "point"
          }
          onClick={() => {
            setDateSort("desc");
            setCommentSort("desc");
          }}>
          댓글 많은 순
        </li>
      </ul>
    );
  };

  const GuestNav = () => {
    return (
      <ul>
        <li
          className={dateSort === "desc" ? "point bold" : "point"}
          onClick={() => {
            setDateSort("desc");
            setCommentSort("");
          }}>
          최신순
        </li>
        <li>|</li>
        <li
          className={dateSort === "desc" ? "point" : "point bold"}
          onClick={() => {
            setDateSort("asc");
            setCommentSort("");
          }}>
          오래된 순
        </li>
      </ul>
    );
  };

  return all ? <GuestNav /> : <MemberNav />;
};

export default SortNav;
