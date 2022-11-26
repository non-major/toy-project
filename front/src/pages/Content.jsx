import React from 'react';
import styled from "styled-components";
import {ButtonWrap} from "./NewContent.jsx"
import MyButton from '../components/MyButton.jsx';

function Content(props) {

    const handleSubmit = () => {
        console.log("수정하기")
    }

    return (
        <ContentWrap>
            <ContentTitle>
                <span className="contentTitle">게시글 제목</span>
                <span className="contentDate">2022.10.22</span>
            </ContentTitle>
            <ContentImg>
                <img src="https://picsum.photos/300/400" />
            </ContentImg>
            <ContentSubstance>
                <p>내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.</p>
            </ContentSubstance>
            {/*해당 게시글 작성자인 경우 ButtonWrap show(.active 추가?) 그럼 NewContent 페이지에서도 똑같이 바꿔줘야함?*/}
            <ButtonWrap>
            <MyButton text="수정하기" type="basic" onClick={handleSubmit}/>
            <MyButton text="삭제하기" type="remove"/>
            </ButtonWrap>
            <CommentWrap>
                <div className="commentTitle">
                    댓글
                </div>
                <div className="commentContent">
                    <span className="commentAuthor">작성자</span>
                    <span className="commentContent">댓글내용입니다.댓글내용입니다.댓글내용입니다.</span>
                </div>
            </CommentWrap>
        </ContentWrap>
    );
}

export default Content;

const ContentWrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
> div {
    margin-bottom : 15px;
}
`

const ContentTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
> span {
    display: block;
}
.contentTitle {
    font-size: 2em;
    font-weight: bold;
}
.contentDate {
    color: grey;
}
`

const ContentImg = styled.div`
display: flex;
justify-content: center;
`

const ContentSubstance = styled.div`
display: flex;
justify-content: center;
padding: 20px;
background-color: #e2e2e2;
`
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
}
`