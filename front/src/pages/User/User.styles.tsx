import styled from "styled-components";
import MyButton from "../../components/MyButton";

const RegisterBox = styled.div`
  min-height: 60vh;
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
  flex-direction: column;
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

const KakaoBtn = styled.button`
  background-color: #fee500;
  width: 100%;
  border: none;
  border-radius: 12px;
  margin-top: 10px;
  padding: 10px 20px 10px 20px;
  color: "#00000085";
  font-size: 18px;
  white-space: pre-line;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
  font-family: "S-CoreDream-4Regular";
  display: flex;
  align-items: center;
`;

const KakaoLogo = styled.img`
  width: 23px;
`;

const KakaoText = styled.span`
  flex: 1;
`;

export {
  RegisterBox,
  Title,
  Formbox,
  MyForm,
  Errors,
  Input,
  KakaoBtn,
  KakaoLogo,
  KakaoText,
};
