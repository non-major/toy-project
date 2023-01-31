import styled from "styled-components";

export const CarouselStyle = styled.div`
  height: 300px;
  width: 100vw;
  position: relative;
  left: 0;
  margin-bottom: 50px;

  * {
    height: 30vh;
    width: 100vw;
  }

  img {
    object-fit: cover;
  }

  .slick-slider > button:before {
    opacity: 1;
    color: ${(props) => props.theme.color.iceblue};
  }

  .slick-prev {
    left: 2vw;
    z-index: 24;
    height: 20px;
    width: 20px;
  }

  .slick-next {
    right: 2vw;
    z-index: 24;
    height: 20px;
    width: 20px;
  }

  .slick-dots {
    height: 20px;
  }

  .slick-dots li button:before {
    opacity: 1;
    color: ${(props) => props.theme.color.iceblue};
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: ${(props) => props.theme.color.darkblue};
  }
`;
