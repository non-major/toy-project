import React, {useState} from 'react';
import styled from 'styled-components';

function Input(props) {
    const {label, placeholder} = props;
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <BasicInputBox>
            <p>{label}</p>
            <BasicInput placeholder={placeholder} value={text} onChange={handleChange}/>
        </BasicInputBox>
    );
}

const BasicInput = styled.input`
width: 250px;
height: 30px;
margin-top: 10px;
padding: 5px 10px;
border: 1px solid grey;
border-radius: 8px;
&:focus{
    outline: 2px solid #003c8f;
}
`

const BasicInputBox = styled.div`
margin: 10px;

`

export default Input;