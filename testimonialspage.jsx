import React from "react";
import Slider from "react-slick";

const TestimonialsPage = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Témoignages</h1>

      <Slider {...settings}>
        {testimonials.map((item, idx) => (
          <div key={idx} className="p-4 border rounded shadow">
            {item.photo && (
              <img
                src={item.photo}
                alt={item.name}
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
            )}
            <p className="italic mb-2">"{item.quote}"</p>
            <p className="text-right font-semibold">{item.name}</p>
            <p className="text-right text-sm">{item.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsPage;
