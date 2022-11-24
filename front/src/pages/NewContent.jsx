import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Input from '../components/Input.jsx'
import MyButton from '../components/MyButton.jsx';
import Header from '../components/MyHeader.jsx'

function NewContent() {

    const titleInput = useRef();

    const [state, setState] = useState({
        title: titleInput.current,
        content:"",
    })
    console.log(titleInput);
    const handleChangeState = (e) => {
        setState({...state,
            [e.target.name]: e.target.value}
        )
    }

    const handleSubmit = () => {
        console.log(state);
        console.log("저장 성공!")
    }


    return (
        <>
            <Header />
            <section>
            <Input ref={titleInput} value={state.title} name="title" label="제목" placeholder="제목" />
            <p>내용</p>
            <ContentInput name="content" placeholder='내용을 적어주세요.' value={state.content} onChange={handleChangeState} />
            <div>
            <MyButton text="저장하기" type="submit" onClick={handleSubmit}/>
            <MyButton text="작성취소" type="basic"/>
            </div>
            </section>
  

        </>
    );
}

const ContentInput = styled.textarea`
width : 500px;
height: 300px;
margin: 10px;
padding: 10px;
border: 1px solid grey;
border-radius: 8px;
&:focus{
    outline: 2px solid #003c8f;
}
`

export default NewContent;