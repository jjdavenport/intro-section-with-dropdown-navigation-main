import data from "./assets/client-databiz.svg";
import audio from "./assets/client-audiophile.svg";
import meet from "./assets/client-meet.svg";
import maker from "./assets/client-maker.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={data} alt="Databiz" />
        </div>
        <div>
          <img src={audio} alt="Audiophile" />
        </div>
        <div>
          <img src={meet} alt="Meet" />
        </div>
        <div>
          <img src={maker} alt="Maker" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
