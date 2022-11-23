import React, {useState} from 'react';
import styled from 'styled-components';

function Input() {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <BasicInput value={text} onChange={handleChange}/>
        </div>
    );
}

const BasicInput = styled.input`
width: 250px;
height: 30px;
margin: 10px;
padding: 5px 10px;
border: 1px solid grey;
border-radius: 8px;
&:focus{
    outline: 2px solid #003c8f;
}
`

export default Input;