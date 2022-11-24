import React from 'react';
import Input from '../components/Input.jsx'

function NewContent() {
    return (
        <>
            <Input label="아이디" placeholder="아이디"/>
            <Input label="비밀번호" placeholder="비밀번호"/>
        </>
    );
}

export default NewContent;