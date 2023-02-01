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

function EditContent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    img: "",
    content: "",
  });

  const token = sessionStorage.getItem("userToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    if (!token) {
      alert("로그인 한 사용자만 사용할 수 있는 서비스입니다.");
      navigate("/login");
    }
  }, [navigate, token]);

  const getOnePost = async () => {
    try {
      const res = await axios.get(`/api/posts/${id}`, config);
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
        content: posts.post.content,
        img: posts.post.image,
      }),
  });

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
          disabled
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
