import React, { useState } from "react";
import { instance } from "./../../api/axiosInstance";
import { CommentModifyButton } from "./Comment.styles";
import { useQueryClient, useMutation } from "react-query";

const Comment = (props: {
  id: string;
  content: string;
  date: string;
  postId: number;
  userId: number;
  isAuthor: boolean;
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const [localContent, setLocalContent] = useState(props.content);

  const handleCommentEdit = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    console.log(localContent);
    return;
  };

  const handleCommentDelete = async () => {
    await instance
      .delete(`/api/comments/${props.id}`)
      .then(() => {
        alert("댓글이 삭제되었습니다.");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const queryClient = useQueryClient();
  const commentDeleteMutation = useMutation(handleCommentDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return (
    <div className="commentContent">
      <span className="commentAuthor">{props.userId}</span>
      <span className="commentContent">
        {isEdit ? (
          <input
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          props.content
        )}
      </span>
      {isEdit ? (
        <button onClick={() => handleCommentEdit}>수정 완료</button>
      ) : (
        <div className="commentButton">
          <CommentModifyButton className="editButton">
            수정하기
          </CommentModifyButton>
          <CommentModifyButton
            className="removeButton"
            onClick={() => commentDeleteMutation.mutate()}>
            삭제하기
          </CommentModifyButton>
        </div>
      )}
    </div>
  );
};

export default Comment;
