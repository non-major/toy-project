import styled from "styled-components";

const RegisterBox = styled.div`
  width: 100%;
  margin: 5% 0 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5%;
`;

const Formbox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Errors = styled.p`
  color: red;
  margin-bottom: 10px;
  font-size: 12px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 8px;
  &:focus {
    outline: 2px solid #003c8f;
  }

  font-family: "S-CoreDream-4Regular";
`;

export { RegisterBox, Title, Formbox, MyForm, Errors, Input };
