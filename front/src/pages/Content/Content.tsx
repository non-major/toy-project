import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import ButtonWrap from "../../styles/ButtonWrap";
import MyButton from "../../components/MyButton";
import CommentList from "../../components/Comment/CommentList";
import ReportModal from "../../components/ContentReportModal/ContentReportModal";
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

function Content() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
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
        .get(`/api/posts/${id}`)
        .then((response) => {
          const postData = response.data.post;
          const isAuthor = response.data.isAuthor;
          console.log(postData);
          setPost((post) => {
            return {
              ...post,
              title: postData.title,
              date: postData.date,
              author: postData.user_nickname,
              content: postData.content,
              img: postData.image,
            };
          });
          if (isAuthor === "false") {
            setIsAuthor(false);
          } else {
            setIsAuthor(true);
          }
        })
        .catch((err) => console.log(err));
    };
    getOnePost();
  }, [id, isAuthor]);
  // 게시글 불러와서 post 세팅해줌

  // isAuthor 값에 따라서 수정하기, 삭제하기 버튼 렌더링

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
      {isReportModalOpen && (
        <ReportModal setModalState={setIsReportModalOpen} />
      )}
      <ContentWrap>
        <ContentReportWrapper>
          <ContentReportBtn onClick={() => setIsReportModalOpen(true)}>
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
          {isAuthor && (
            <>
              <MyButton btntype="basic" onClick={handleEdit}>
                {"수정하기"}
              </MyButton>
              <MyButton btntype="remove" onClick={handleDelete}>
                {"삭제하기"}
              </MyButton>
            </>
          )}
        </ButtonWrap>
        <CommentList postId={id} />
      </ContentWrap>
    </>
  );
}

export default Content;
