import React from "react";

import Hero from "../components/home/Hero";
import Programs from "../components/home/Programs";
import WhyUs from "../components/home/WhyUs";
import QuickApply from "../components/home/QuickApply";
import Testimonials from "../components/home/Testimonials";
import AlumniGallery from "../components/home/AlumniGallery";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <WhyUs />
      <QuickApply />
      <Testimonials />
      <AlumniGallery />
      <Footer />
    </div>
  );
};

export default Home;
