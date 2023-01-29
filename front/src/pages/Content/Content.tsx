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
import { useMutation, useQueryClient } from "react-query";
import Modal from "../../components/Modal/Modal";

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
              <MyButton
                btntype="remove"
                onClick={() => {
                  setIsDeleteModalOpen(true);
                }}>
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
