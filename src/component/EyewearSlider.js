import Slider from "react-slick";
import EyewearCard from "./EyewearCard";
// import EyewearCard from "./EyewearCard"; // adjust path accordingly

const EyewearSlider = ({ frameData }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-3">
      <Slider {...settings}>
        {frameData?.map((product, i) => (
          <div key={i} className="px-2">
            <EyewearCard data={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EyewearSlider;
