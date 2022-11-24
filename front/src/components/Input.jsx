import React, {useState} from 'react';
import styled from 'styled-components';

function Input(props) {
    const [text, setText] = useState("")
    const {label, placeholder, type} = props;

    const handleChangeState = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <p>{label}</p>
            <BasicInput value={text} type={type} placeholder={placeholder} onChange={handleChangeState}/>
        </>
    );
}

const BasicInput = styled.input`
width: 500px;
height: 30px;
margin-top: 10px;
padding: 5px 10px;
border: 1px solid grey;
border-radius: 8px;
&:focus{
    outline: 2px solid #003c8f;
}
`

export default Input;