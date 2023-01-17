import React, { useState } from "react";
import { BasicInput } from "./Input.styles";

function Input(props: { label: string; placeholder: string; type: string }) {
  const [text, setText] = useState("");
  const { label, placeholder, type } = props;

  const handleChangeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <p>{label}</p>
      <BasicInput
        value={text}
        type={type}
        placeholder={placeholder}
        onChange={handleChangeState}
      />
    </>
  );
}

export default Input;
