import React, { useState } from "react";
import Comment from "./Comment";
import { CommentWrap } from "./Comment.styles";

function CommentList({ postId }: { postId: string | undefined }) {
  // db에서 생성된 comments들 갖고올 것 (나중에 기본값 세팅해주기?)
  const comments = [{ id: 1, author: "작성자", body: "댓글입니다." }];

  // author는 현재 로그인 한 user token에서 id 빼오기
  const [comment, setComment] = useState({
    body: "",
  });

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment({ ...comment, body: e.target.value });
  };

  const handleCommentSubmit = () => {
    // onCreate(comment.body);
    setComment({
      body: "",
    });
  };

  return (
    <CommentWrap>
      <div className="commentTitle">댓글</div>
      <div className="commentInput">
        <input onChange={handleCommentChange} value={comment.body} />
        <button onClick={handleCommentSubmit}>등록</button>
      </div>
      {comments.map((item) => {
        return (
          <Comment
            key={item.id}
            {...item}
            // onEdit={onEdit}
            // onDelete={onDelete}
          />
        );
      })}
      {/* item에는 author, content, postId, createdAt 들어있음 */}
    </CommentWrap>
  );
}

export default CommentList;
