import { useNavigate } from "react-router-dom";
import { Btn } from "./CreateBtn.styles";

const CreateBtn = () => {
  const navigate = useNavigate();

  const auth = () => {
    return navigate(sessionStorage.getItem("userToken") ? "/new" : "/login");
  };

  return (
    <Btn onClick={auth}>
      <div>새 기록 쓰기</div>
    </Btn>
  );
};

export default CreateBtn;
