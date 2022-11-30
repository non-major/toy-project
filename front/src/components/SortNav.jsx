import React from "react";

const SortNav = ({ all, setSort, setCommentSort }) => {
  console.log(all);
  const MemberNav = () => {
    return (
      <ul>
        <li className="point">최신순</li>
        <li>|</li>
        <li className="point">오래된 순</li>
        <li>|</li>
        <li className="point">댓글 많은 순</li>
      </ul>
    );
  };

  const GuestNav = () => {
    return (
      <ul>
        <li className="point">최신순</li>
        <li>|</li>
        <li className="point">오래된 순</li>
      </ul>
    );
  };

  return all ? <GuestNav /> : <MemberNav />;
};

export default SortNav;
