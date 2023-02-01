import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../../components/MyButton";
import axios from "axios";
import ButtonWrap from "../../styles/ButtonWrap";
import { MyTitle } from "../User/Register";
import {
  TitleInput,
  TitleWrap,
  ContentInput,
  ImgSearchInput,
} from "./EditContent.styles";
import { useMutation, useQuery, useQueryClient } from "react-query";
import getOnePost from "../../api/getOnePost";

function EditContent() {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    img: "",
    content: "",
  });

  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getOnePost(id),
  });

  useEffect(() => {
    const postData = postQuery?.data?.data.post;
    if (postQuery.status === "success") {
      setPost((post) => {
        return {
          ...post,
          title: postData.title,
          content: postData.content,
          img: postData.image,
        };
      });
    }
  }, [postQuery.status, postQuery?.data?.data.post]);

  const navigate = useNavigate();

  const token = sessionStorage.getItem("userToken");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleChangeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleContentChangeState = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setPost({ ...post, content: e.target.value });
  };

  const handleSubmit = async () => {
    await axios
      .patch(
        `/api/posts/update/${id}`,
        {
          title: post.title,
          content: post.content,
          image: post.img,
        },
        config,
      )
      .then((response) => {
        alert("독서 기록 수정이 완료되었습니다.");
        navigate(`/content/${response.data.id}`);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const queryClient = useQueryClient();
  const postMutation = useMutation(handleSubmit, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleQuit = () => {
    if (window.confirm("작성을 취소하시겠습니까?")) {
      navigate(`/content/${id}`);
    }
  };

  return (
    <div>
      <TitleWrap>
        <MyTitle>독서 기록 수정하기</MyTitle>
      </TitleWrap>
      <p>
        <label htmlFor="title">제목</label>
      </p>
      <TitleInput
        name="title"
        id="title"
        placeholder="제목을 적어주세요."
        value={post.title}
        onChange={handleChangeState}
      />
      <p>
        <label htmlFor="search">책 이미지 검색하기</label>
      </p>
      <div>
        <ImgSearchInput
          name="img"
          id="img"
          placeholder="어떤 책을 읽으셨나요?"
          value={post.img}
          onChange={handleChangeState}
        />
        <MyButton btntype="basic" onClick={handleQuit}>
          검색
        </MyButton>
      </div>
      <p>내용</p>
      <ContentInput
        name="content"
        placeholder="내용을 적어주세요."
        value={post.content}
        onChange={handleContentChangeState}
      />
      <ButtonWrap>
        <MyButton btntype="submit" onClick={() => postMutation.mutate()}>
          수정하기
        </MyButton>
        <MyButton btntype="basic" onClick={handleQuit}>
          수정취소
        </MyButton>
      </ButtonWrap>
    </div>
  );
}

export default EditContent;
