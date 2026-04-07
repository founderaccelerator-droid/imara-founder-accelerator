import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    name: "Jean K.",
    role: "Alumni - SeedLift",
    quote: "Grâce à Founder Accelerator, notre startup a levé ses premiers fonds.",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Amina T.",
    role: "Alumni - FikraLaunch",
    quote: "Le mentorat et les modules étaient incroyablement utiles.",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Patrick L.",
    role: "Alumni - Congo Founder Accelerator",
    quote: "Le Startup Pitch Forum nous a mis directement en contact avec des investisseurs.",
    image: "https://via.placeholder.com/100"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Témoignages</h2>
      <Slider {...settings}>
        {testimonialsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-lg italic mb-2">"{item.quote}"</p>
            <p className="font-semibold">{item.name}</p>
            <p className="text-gray-500">{item.role}</p>
          </div>
        ))}
      </Slider>
      <button
        onClick={() => window.location.href="/testimonials"}
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Voir tous les témoignages
      </button>
    </section>
  );
};

export default Testimonials;
