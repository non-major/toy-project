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
import { instance } from "../../api/axiosInstance";

function Content() {
  const navigate = useNavigate();
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [post, setPost] = useState({
    title: "",
    date: "",
    author: "",
    content: "",
    img: "",
  });

  const [isAuthor, setIsAuthor] = useState(false);

  const { id } = useParams();

  const userToken = sessionStorage.getItem("userToken");

  useEffect(() => {
    const getOnePost = async () => {
      await instance
        .get(`/api/posts/${id}`)
        .then((response) => {
          const postData = response.data.post;
          const isCurrentAuthor = response.data.isAuthor;
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
          if (isCurrentAuthor === "false") {
            setIsAuthor(false);
          } else {
            setIsAuthor(true);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 400) {
            navigate("/notFound");
          }
        });
    };
    getOnePost();
  }, [id, isAuthor, userToken, navigate]);
  // 게시글 불러와서 post 세팅

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    alert("이 게시물을 삭제하시겠습니까?");
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
                수정하기
              </MyButton>
              <MyButton btntype="remove" onClick={handleDelete}>
                삭제하기
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
