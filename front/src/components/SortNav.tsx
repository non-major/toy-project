import React from "react";

const SortNav = ({ all, setDateSort, setCommentSort }) => {
  const MemberNav = () => {
    return (
      <ul>
        <li
          className="point"
          onClick={() => {
            setDateSort("desc");
            setCommentSort("");
          }}>
          최신순
        </li>
        <li>|</li>
        <li
          className="point"
          onClick={() => {
            setDateSort("asc");
            setCommentSort("");
          }}>
          오래된 순
        </li>
        <li>|</li>
        <li
          className="point"
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
          className="point"
          onClick={() => {
            setDateSort("desc");
            setCommentSort("");
          }}>
          최신순
        </li>
        <li>|</li>
        <li
          className="point"
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
