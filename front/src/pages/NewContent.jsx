import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import Input from '../components/Input.jsx'
import MyButton from '../components/MyButton.jsx';

function NewContent() {

    const navigate = useNavigate();

    const [state, setState] = useState({
        title: "",
        img: "",
        content:"",
    })

    const handleChangeState = (e) => {
        setState({...state,
            [e.target.name]: e.target.value}
        )
    }

    const handleSubmit = () => {
        console.log(state);
        console.log("저장 성공!")
    }

    const handleQuit = () => {
        if(window.confirm("작성을 취소하시겠습니까?")){
            navigate("/");
        }
    }

    return (
        <div>
            <p><label htmlFor='title'>제목</label></p>
            <TitleInput name="title" id="title" placeholder="제목을 적어주세요." value={state.title} onChange={handleChangeState}/>
            <p><label htmlFor='search'>책 이미지 검색하기</label></p>
            <div>
            <ImgSearchInput name="img" id="img" placeholder="어떤 책을 읽으셨나요?" value={state.img} onChange={handleChangeState}/>
            <MyButton text="검색" type="basic" onClick={handleSubmit}/>
            </div>
            <p>내용</p>
            <ContentInput name="content" placeholder='내용을 적어주세요.' value={state.content} onChange={handleChangeState} />
            <ButtonWrap>
            <MyButton text="저장하기" type="submit" onClick={handleSubmit}/>
            <MyButton text="작성취소" type="basic" onClick={handleQuit}/>
            </ButtonWrap>
        </div>
    );
}


const TitleInput = styled.input`
width: 500px;
height: 30px;
margin: 10px 0;
padding: 5px 10px;
border: 1px solid grey;
border-radius: 8px;
font-family: "S-CoreDream-4Regular";
&:focus{
    outline: 2px solid #003c8f;
}`

const ContentInput = styled.textarea`
width: 500px;
height: 300px;
margin: 10px 0;
padding: 10px;
border: 1px solid grey;
border-radius: 8px;
font-family: "S-CoreDream-4Regular";
&:focus{
    outline: 2px solid #003c8f;
}
`
const ImgSearchInput = styled(TitleInput)`
width: 400px;
margin-right: 20px;
`

export const ButtonWrap = styled.div`
display: flex;
justify-content: flex-end;
`

export default NewContent;