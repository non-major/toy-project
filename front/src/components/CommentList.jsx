import React, {useState} from 'react';
import styled from "styled-components";
import Comment from './Comment';

function CommentList({comments, onCreate, onEdit}) {

// author는 현재 로그인 한 user token에서 id 빼오기
    const [comment, setComment] = useState({
        author: "winter",
        body: "",
    });

    const handleCommentChange = (e) =>{
        setComment({...comment, body: e.target.value});
    }

    const handleCommentSubmit = () => {
        // token 확인 로직 필요
        // 댓글 글자수 확인?
        onCreate(comment.author, comment.body);
        setComment({
            author: "winter",
            body: "",
        })
    }


    return (
        <CommentWrap>
        <div className="commentTitle">
            댓글
        </div>
        <div className='commentInput'>
            <input onChange={handleCommentChange} value={comment.body}/>
            <button onClick={handleCommentSubmit}>등록</button>
        </div>
        {
            comments.map((item) => {
                return <Comment {...item} onEdit={onEdit}/>
            })
        }
    </CommentWrap>
    );
}

export default CommentList;

const CommentWrap = styled.div`
display: flex;
flex-direction: column;
.commentTitle {
    padding: 10px 0;
    border-bottom: 1px solid black;
}
.commentContent {
    > span {
        display: block;
        padding: 10px 0;
    }

    .commentAuthor {
        font-weight: bolder;
    }
}

.commentButton {
    margin-bottom: 10px;
> a {
    display: inline-block;
    margin-right: 10px;
    font-size: 0.8rem;
    color: grey;
    text-decoration: underline;
}
}

.commentInput {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    > input {
        width: 90%;
        height: 30px;
        padding: 5px;
        margin: 0 10px 0 0;
    }
    > button {
        background-color: #1565e0;
        width: 60px;
        border: none;
        padding: 10px;
        color: white;
        border-radius: 5px;
        font-family: "S-CoreDream-4Regular";
        cursor: pointer;
        &:hover {
            opacity: 0.8;
          }
    }
}
`