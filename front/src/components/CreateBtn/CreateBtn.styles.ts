import styled from "styled-components";

export const Btn = styled.div`
  width: 7vw;
  height: 6vh;
  border-radius: 100px;
  text-align: center;
  line-height: 6vh;
  color: white;
  background-color: ${(props) => props.theme.color.darkblue};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  position: fixed;
  bottom: 10vh;
  right: 18vw;
  z-index: 24;

  img {
    width: 50%;
    height: 50%;
    padding: 25% 25%;
    object-fit: cover;
  }
`;
