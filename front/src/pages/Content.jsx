import React, { useRef } from 'react';
import styled from "styled-components";
import {ButtonWrap} from "./NewContent.jsx"
import MyButton from '../components/MyButton.jsx';
import CommentList from '../components/CommentList.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Content(props) {
    const [post, setPost] = useState({
        title: '',
        date: '',
        author: '',
        content: '',
        img: '',
        })
    const [userNickname, setUserNickname] = useState('');
    const [isAuthor, setIsAuthor] = useState(false);

    // const isAuthor = useRef(false);

        function formatDate(dateString) {
            const newDate = new Date(dateString);
            let formattedDate = `${newDate.getFullYear()}.`;
            formattedDate += `${`0${newDate.getMonth() + 1}`.slice(-2)}.`;
            formattedDate += `${`0${newDate.getDate()}`.slice(-2)}`;
            return formattedDate;
          }

    const {id} = useParams();

        useEffect(()=> {
            const getOnePost = async () => {
                await axios.get(`/api/post/postList/details/${id}`).then((response) => 
                {
                    const postData = response.data[0];
                    setPost({
                        ...post,
                        title: postData.title,
                        date: (formatDate(postData.createdAt)),
                        author: postData.userId.nickname,
                        content: postData.content,
                        img: postData.image,
                    })
                }).catch((err)=> console.log("게시글 가져오기 오류"));
            }
            getOnePost();
        }, []) 
        // 게시글 불러와서 post 세팅해줌

        useEffect(()=> {
            const verifyAuthor = async () => {
                const userToken = sessionStorage.getItem("userToken");
                try {
                const user = await axios.get(`/api/user/myInfo`, {
                headers: {
                authorization: `Bearer ${userToken}`,
                },
                });
                setUserNickname(user.data.nickname);
                return;
                } catch(err){
                    setIsAuthor(false);
                    console.log("로그인 되지 않음 혹은 작성자가 아님")
                }
            }
                verifyAuthor();
        },[])
        // 현재 로그인 한 유저의 정보에서 nickname 빼옴

        useEffect(()=> {
            if(userNickname === post.author){
                setIsAuthor(true)
                return;
            } else {
                return;
            }
        }, [])
    // 로그인 한 유저와 현재 보고있는 post의 작성자가 같으면 isAuthor = true

        // useEffect(()=> {
        //     if(userNickname === post.author){
        //         isAuthor.current = true;
        //     } else {
        //         return;
        //     }
        // })


    let comments = [{id:1, author: "sjko", content: "감사합니다."}, {id:2, author: "hailee", content: "재미써용"}];


    const handleEdit = () => {
        console.log("수정하기")
    }

    const handleDelete = () => {
        alert("이 게시물을 삭제하시겠습니까?")
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
                <span className="contentTitle">{post.title}</span>
                <span className="contentDate">{post.date}</span>
            </ContentTitle>
            <div className='contentAuthor'>
                <span>@{post.author}</span>
            </div>
            <ContentImg>
                <img src={post.img} />
            </ContentImg>
            <ContentSubstance>
                <p>{post.content}</p>
            </ContentSubstance>
            <ButtonWrap>{ isAuthor ? <>
                <MyButton text="수정하기" type="basic" onClick={handleEdit}/>
                <MyButton text="삭제하기" type="remove" onClick={handleDelete}/>
            </> : null}
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

.contentAuthor {
    color: grey;
    font-weight: bolder;
    margin: 10px;
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
>img{
    width: 100%;
    height: 100%;
}
`

const ContentSubstance = styled.div`
display: flex;
justify-content: center;
padding: 20px;
background-color: #e2e2e2;
`