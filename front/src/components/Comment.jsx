import React, { useState } from "react";

const Comment = ({ postId, author, content, _id, onEdit, onDelete }) => {
  // 인자로 nickname 넘어오면 추가로 받아서 commentAuthor span에 넣어주기
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };
  const [localContent, setLocalContent] = useState(content);

  const handleCommentEdit = (e) => {
    console.log(localContent);
    onEdit(_id, localContent);
    toggleIsEdit(e);
    return;
  };

  const handleCommentDelete = (e) => {
    e.preventDefault();
    onDelete();
  };

  return (
    <div className="commentContent">
      <span className="commentAuthor">{author.nickname}</span>
      <span className="commentContent">
        {isEdit ? (
          <input
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          content
        )}
      </span>
      {isEdit ? (
        <button onClick={handleCommentEdit}>수정 완료</button>
      ) : (
        <div className="commentButton">
          <span className="editButton">수정하기</span>
          <span className="removeButton">삭제하기</span>
        </div>
      )}
    </div>
  );
};

export default Comment;
