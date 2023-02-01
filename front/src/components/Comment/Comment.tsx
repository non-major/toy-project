import React, { useState } from "react";
import { instance } from "./../../api/axiosInstance";
import {
  CommentModifyButton,
  CommentWrap,
  CommentContent,
  CommentAuthor,
  CommentCreatedDate,
} from "./Comment.styles";
import { useQueryClient, useMutation } from "react-query";
import { dateFormatter } from "../../api/dateFormatter";
import { CommentData } from "./CommentList";

const Comment = (props: CommentData) => {
  const [isEdit, setIsEdit] = useState(false);

  const [localContent, setLocalContent] = useState(props.content);

  const handleCommentEdit = async () => {
    await instance
      .patch(`/api/comments/${props.id}`, {
        content: localContent,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleCommentDelete = async () => {
    if (confirm("댓글을 삭제하시겠습니까?")) {
      await instance
        .delete(`/api/comments/${props.id}`)
        .then(() => {
          alert("댓글이 삭제되었습니다.");
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  };

  const queryClient = useQueryClient();
  const commentDeleteMutation = useMutation(handleCommentDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
  const commentPatchMutation = useMutation(handleCommentEdit, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return (
    <CommentWrap>
      <CommentAuthor>{props.nickname}</CommentAuthor>
      <CommentContent>
        {isEdit ? (
          <input
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          props.content
        )}
      </CommentContent>
      <CommentCreatedDate>{dateFormatter(props.date)}</CommentCreatedDate>
      {props.isAuthor && (
        <div className="commentButton">
          <CommentModifyButton onClick={() => setIsEdit(!isEdit)}>
            {isEdit ? (
              <span onClick={() => commentPatchMutation.mutate()}>
                수정완료
              </span>
            ) : (
              <span>수정하기</span>
            )}
          </CommentModifyButton>
          <CommentModifyButton onClick={() => commentDeleteMutation.mutate()}>
            삭제하기
          </CommentModifyButton>
        </div>
      )}
    </CommentWrap>
  );
};

export default Comment;
