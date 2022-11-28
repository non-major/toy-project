import React from 'react';
import styled from "styled-components";
import {ButtonWrap} from "./NewContent.jsx"
import MyButton from '../components/MyButton.jsx';
import CommentList from '../components/CommentList.jsx';



function Content(props) {
    
    // 1개의 게시글 get 해오기
    // params..?
    // 받은 게시글의 comment 배열 Comment 컴포넌트에 prop으로 전달해주기
    let comments = [{id:1, author: "sjko", content: "감사합니다."}, {id:2, author: "hailee", content: "재미써용"}];


    const handleSubmit = () => {
        console.log("수정하기")
    }

    const onCreate = (author, content, id=3) => {
        // comment db에 create 요청 보내는 로직으로 변경 필요
        comments.push({id: id, author: author, content: content});
    }

    const onEdit = (targetId, newContent) => {
        comments = comments.map((item) => item.id === targetId? {...item, content: newContent} : item);
        console.log(comments);
    } // 전달된 newContent에서 content 속성만 빼와서 targetId와 같은 id 가진 요소 content만 바꿔끼우기
    // api 요청 하면 patch로 해당 comment 업데이트 하고 새로 받아오는 걸로 로직 변경 필요

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
            <CommentList comments={comments} onCreate={onCreate} onEdit={onEdit}/>
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
