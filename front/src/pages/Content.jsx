import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {ButtonWrap} from "./NewContent.jsx"
import MyButton from '../components/MyButton.jsx';
import CommentList from '../components/CommentList.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Content(props) {
    const navigate = useNavigate();

    const [post, setPost] = useState({
        title: '',
        date: '',
        author: '',
        content: '',
        img: '',
        })
    const [comments, setComments] = useState([]);

    const [userNickname, setUserNickname] = useState('기본');
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

    const userToken = sessionStorage.getItem('userToken');

    const config = {
        headers: { Authorization: `Bearer ${userToken}` }
    };

        useEffect(()=> {
            const getOnePost = async () => {
                await axios.get(`/api/post/postList/details/${id}`).then((response) => 
                {
                    const postData = response.data[0];
                    console.log(postData);
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
            const getComments = async () => {
                await axios.get(`/api/comment/get/${id}`)
                .then((response)=> {
                    setComments([...response.data, ...comments])
                })
                .catch(err => console.log(err.response.data.reason));
            }
            getComments();
        }, [])
        // comments 배열 세팅해주기

        useEffect(()=> {
            const verifyAuthor = async () => {
                try {
                const user = await axios.get(`/api/user/myInfo`, 
                    config,
                );
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
            console.log('userNickname', userNickname)
            console.log('작성자', post.author)
            if(userNickname !== post.author){
                setIsAuthor(false);
                console.log(isAuthor);
                return;
            } else {
                setIsAuthor(true);
                console.log(isAuthor);
                return;
            }
        }, [userNickname, post.author]);
    // 로그인 한 유저와 현재 보고있는 post의 작성자가 같으면 isAuthor = true
    // 와 계속 안되다가 deps에 userNickname이랑 post.author값 넣으니까 됐다ㅠㅠㅠㅠ

    const handleEdit = () => {
        console.log("수정하기")
    }

    const handleDelete = () => {
        alert("이 게시물을 삭제하시겠습니까?")
    }

    const onCreate = async (content) => {
        try{
          const newComment = await axios.post(`/api/comment/add/${id}`, {
                content: content,
            }, config)
            console.log(newComment.data.content);
            setComments([{author: newComment.data.author, content: newComment.data.content,},...comments])
            // 생성된 댓글 다시 api 요청해서 받아오고 싶은데 너무 힘들어서 일단 임시방편으로ㅠㅠㅠㅠ
            navigate(`/content/${id}`)
        } catch (err) {
            alert(err.response.data.reason)
            navigate('/login');
        }
    }

    const onEdit = async (targetId, newContent) => {
        await axios.patch(`/comment/update/${targetId}`, {
            content: newContent
        }, config);
        console.log(comments);
    } 
    // api 요청 하면 patch로 해당 comment 업데이트 하고 새로 받아오는 걸로 로직 변경 필요

    const onDelete = () => {
        alert('이 댓글을 삭제하시겠습니까?');
    }

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
            <ButtonWrap>
                { isAuthor ? <>
                <MyButton text="수정하기" type="basic" onClick={handleEdit}/>
                <MyButton text="삭제하기" type="remove" onClick={handleDelete}/>
            </> : null}
            </ButtonWrap>
            <CommentList postId={id} comments={comments} onCreate={onCreate} onEdit={onEdit} onDelete={onDelete}/>
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