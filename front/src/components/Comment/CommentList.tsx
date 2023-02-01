import React, { useState } from "react";
import Comment from "./Comment";
import { CommentWrap } from "./Comment.styles";
import { useQuery, useMutation, useQueryClient } from "react-query";
import getComments from "../../api/getComments";
import postOneComment from "./../../api/postOneComment";

export type CommentData = {
  id: string;
  content: string;
  date: string;
  postId: number;
  userId: number;
  isAuthor: boolean;
  nickname: string;
};

function CommentList({ postId }: { postId: string | undefined }) {
  const { data, isSuccess } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
  });

  const [localCommentText, setLocalCommentText] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalCommentText(() => e.target.value);
  };

  const handleCommentSubmit = async () => {
    const promiseResult = await postOneComment(postId, {
      content: localCommentText,
      date: new Date().toString(),
    });
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
