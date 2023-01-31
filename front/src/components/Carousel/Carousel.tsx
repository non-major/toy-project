import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselStyle } from "./Carousel.styles";
import { Link } from "react-router-dom";

const slide = [
  "https://res.cloudinary.com/dk9scwone/image/upload/v1675150773/z4y1cebpphrhzd9rcrsu.png",
  "https://res.cloudinary.com/dk9scwone/image/upload/v1675150774/nuly6pddivqa9dphopix.png",
  "https://res.cloudinary.com/dk9scwone/image/upload/v1675150774/dodsmi18nxeef9whyqq9.png",
];

const Carousel = () => {
  const setting = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <CarouselStyle className="carousel">
      <Slider {...setting}>
        {slide.map((item, idx) => {
          return (
            <div key={idx}>
              <Link
                to={
                  idx === 1 && sessionStorage.getItem("userToken")
                    ? "/new"
                    : "/"
                }>
                <img src={item} />
              </Link>
            </div>
          );
        })}
      </Slider>
    </CarouselStyle>
  );
};

export default Carousel;
