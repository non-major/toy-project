import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { CommentWrap } from "./Comment.styles";
import { useQuery, useMutation, useQueryClient } from "react-query";
import getComments from "../../api/getComments";
import axios, { AxiosError } from "axios";
import postOneComment from "./../../api/postOneComment";
import { useNavigate } from "react-router-dom";

type CommentData = {
  id: string;
  content: string;
  date: string;
  postId: number;
  userId: number;
  isAuthor: boolean;
};

function CommentList({ postId }: { postId: string | undefined }) {
  const navigate = useNavigate();
  const { data, isSuccess } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
  });

  const [localCommentText, setLocalCommentText] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalCommentText(() => e.target.value);
  };

  // 성공했을 때 response가 빈 객체..?
  const handleCommentSubmit = async () => {
    const promiseResult = await postOneComment(postId, {
      content: localCommentText,
      date: new Date().toString(),
    });
    if (promiseResult.response.status === 403) {
      alert("로그인 한 사용자만 댓글 등록이 가능합니다.");
      navigate("/login");
    }
  };

  const queryClient = useQueryClient();
  const commentCreateMutation = useMutation(handleCommentSubmit, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      setLocalCommentText("");
    },
  });

  return (
    <CommentWrap>
      <div className="commentTitle">댓글</div>
      <div className="commentInput">
        <input
          onChange={(e) => handleCommentChange(e)}
          value={localCommentText}
        />
        <button onClick={() => commentCreateMutation.mutate()}>등록</button>
      </div>
      {data?.data.map((item: CommentData) => {
        return <Comment key={item.id} {...item} />;
      })}
    </CommentWrap>
  );
}

export default CommentList;
