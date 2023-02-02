import { useEffect, useState, Dispatch, SetStateAction } from "react";
import ButtonWrap from "../../styles/ButtonWrap";
import MyButton from "../../components/MyButton";
import CommentList from "../../components/Comment/CommentList";
import ReportModal from "../../components/ContentReportModal/ContentReportModal";
import { useNavigate, useParams } from "react-router-dom";
import {
  ContentWrap,
  ContentTitle,
  ContentImg,
  ContentSubstance,
  ContentReportWrapper,
  ContentReportBtn,
  DeleteModalButton,
} from "./Content.styles";
import { RiAlarmWarningFill } from "react-icons/ri";
import { instance } from "../../api/axiosInstance";
import { useMutation, useQueryClient, useQuery } from "react-query";
import Modal from "../../components/Modal/Modal";
import { dateFormatter } from "./../../api/dateFormatter";
import axios from "axios";

function Content() {
  const navigate = useNavigate();
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [post, setPost] = useState({
    title: "",
    date: "",
    author: "",
    content: "",
    img: "",
    isAuthor: false,
  });

  const { id } = useParams();

  const getOnePost = async () => {
    try {
      const res = await axios.get(`/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { data: posts } = useQuery(["posts", id], () => getOnePost(), {
    onSuccess: (posts) =>
      setPost({
        ...post,
        title: posts.post.title,
        date: posts.post.date,
        author: posts.post.user_nickname,
        content: posts.post.content,
        img: posts.post.image,
        isAuthor: posts.isAuthor === "true" ? true : false,
      }),
  });

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async () => {
    await instance
      .delete(`/api/posts/delete/${id}`)
      .then(() => {
        alert("독서 기록이 삭제되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const queryClient = useQueryClient();
  const postDeleteMutation = useMutation(handleDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const DeleteModal = () => {
    return (
      <Modal title="" setModalState={setIsDeleteModalOpen}>
        <p>독서 기록을 삭제하시겠습니까?</p>
        <DeleteModalButton
          onClick={() => {
            postDeleteMutation.mutate();
          }}>
          확인
        </DeleteModalButton>
      </Modal>
    );
  };

  return (
    <>
      {isReportModalOpen && (
        <ReportModal
          postId={id}
          postTitle={post.title}
          setModalState={setIsReportModalOpen}
        />
      )}
      {isDeleteModalOpen && <DeleteModal />}
      <ContentWrap>
        <ContentReportWrapper>
          <ContentReportBtn onClick={() => setIsReportModalOpen(true)}>
            <span>신고하기</span>
            <RiAlarmWarningFill />
          </ContentReportBtn>
        </ContentReportWrapper>
        <ContentTitle>
          <span className="contentTitle">{post.title}</span>
          <span className="contentDate">{dateFormatter(post.date)}</span>
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
          {post.isAuthor ? (
            <>
              <MyButton btntype="basic" onClick={handleEdit}>
                수정하기
              </MyButton>
              <MyButton
                btntype="remove"
                onClick={() => {
                  setIsDeleteModalOpen(true);
                }}>
                삭제하기
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
