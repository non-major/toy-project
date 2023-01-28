import styled from "styled-components";
import { Link } from "react-router-dom";

const ImgWrap = styled.div`
  margin: 50px 0 30px 0;
  > img {
    width: 500px;
  }
`;

const NotFoundText = styled.p`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  padding: 15px;
  margin: 15px 0 10px 10px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: ${(props) => props.theme.color.blue};
  color: white;
  text-decoration: none;
`;

export { ImgWrap, StyledLink, NotFoundText };
