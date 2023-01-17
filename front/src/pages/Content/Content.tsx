import React, { useEffect, useState } from "react";
import ButtonWrap from "../../styles/ButtonWrap";
import MyButton from "../../components/MyButton";
import CommentList from "../../components/Comment/CommentList";
import ReportModal from "../../components/ReportModal/ReportModal";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  ContentWrap,
  ContentTitle,
  ContentImg,
  ContentSubstance,
  ContentReportWrapper,
  ContentReportBtn,
} from "./Content.styles";
import { RiAlarmWarningFill } from "react-icons/ri";
import { useModalState, useModalDispatch } from "../../App";

function Content() {
  const state = useModalState();
  const dispatch = useModalDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    date: "",
    author: "",
    content: "",
    img: "",
  });
  const [comments, setComments] = useState([]);

  const [userNickname, setUserNickname] = useState("기본");
  const [isAuthor, setIsAuthor] = useState(false);

  // const isAuthor = useRef(false);

  function formatDate(dateString: Date) {
    const newDate = new Date(dateString);
    let formattedDate = `${newDate.getFullYear()}.`;
    formattedDate += `${`0${newDate.getMonth() + 1}`.slice(-2)}.`;
    formattedDate += `${`0${newDate.getDate()}`.slice(-2)}`;
    return formattedDate;
  }

  const { id } = useParams();

  const userToken = sessionStorage.getItem("userToken");

  useEffect(() => {
    const getOnePost = async () => {
      await axios
        .get(`/api/post/postList/details/${id}`)
        .then((response) => {
          const postData = response.data[0];
          console.log(postData);
          setPost((post) => {
            return {
              ...post,
              title: postData.title,
              date: formatDate(postData.createdAt),
              author: postData.userId.nickname,
              content: postData.content,
              img: postData.image,
            };
          });
        })
        .catch((err) => console.log("게시글 가져오기 오류"));
    };
    getOnePost();
  }, [id]);
  // 게시글 불러와서 post 세팅해줌

  useEffect(() => {
    if (userNickname !== post.author) {
      setIsAuthor(false);
      console.log(isAuthor);
      return;
    } else {
      setIsAuthor(true);
      console.log(isAuthor);
      return;
    }
  }, [userNickname, post.author, isAuthor]);
  // 로그인 한 유저와 현재 보고있는 post의 작성자가 같으면 isAuthor = true
  // 와 계속 안되다가 deps에 userNickname이랑 post.author값 넣으니까 됐다ㅠㅠㅠㅠ

  const handleEdit = () => {
    console.log("수정하기");
  };

  const handleDelete = () => {
    alert("이 게시물을 삭제하시겠습니까?");
  };

  const onDelete = () => {
    alert("이 댓글을 삭제하시겠습니까?");
  };

  return (
    <>
      {state.isReportModalOpen && <ReportModal />}
      <ContentWrap>
        <ContentReportWrapper>
          <ContentReportBtn onClick={() => dispatch({ type: "Report" })}>
            <span>신고하기</span>
            <RiAlarmWarningFill />
          </ContentReportBtn>
        </ContentReportWrapper>
        <ContentTitle>
          <span className="contentTitle">{post.title}</span>
          <span className="contentDate">{post.date}</span>
        </ContentTitle>
        <div className="contentAuthor">
          <span>@{post.author}</span>
        </div>
        <ContentImg>
          <img src={post.img} />
        </ContentImg>
        <ContentSubstance>
          <p>{post.content}</p>
        </ContentSubstance>
        <ButtonWrap>
          {isAuthor ? (
            <>
              <MyButton btntype="basic" onClick={handleEdit}>
                {"수정하기"}
              </MyButton>
              <MyButton btntype="remove" onClick={handleDelete}>
                {"삭제하기"}
              </MyButton>
            </>
          ) : null}
        </ButtonWrap>
        <CommentList postId={id} />
      </ContentWrap>
    </>
  );
}

export default Content;
