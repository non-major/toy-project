import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselStyle } from "./Carousel.styles";
import { Link } from "react-router-dom";

const slide = [
  "https://picsum.photos/2000/400",
  "https://picsum.photos/2000/400",
  "https://picsum.photos/2200/400",
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
              <img src={item} />
            </div>
          );
        })}
      </Slider>
    </CarouselStyle>
  );
};

export default Carousel;
