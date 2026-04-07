import React from "react";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
import React from "react";
import Hero from "../components/home/Hero";
import Programs from "../components/home/Programs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
    </div>
  );
};

export default Home;
import React from "react";
import Hero from "../components/home/Hero";
import Programs from "../components/home/Programs";
import WhyUs from "../components/home/WhyUs";  // <-- import ajouté

const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <WhyUs />  // <-- ajouté ici
    </div>
  );
};

export default Home;
import QuickApply from "../components/home/QuickApply";
      <div>
  <Hero />
  <Programs />
  <WhyUs />
  <QuickApply />  // <-- ajouté ici
</div>
import Testimonials from "../components/home/Testimonials";
        <div>
  <Hero />
  <Programs />
  <WhyUs />
  <QuickApply />
  <Testimonials />  // <-- ajouté ici
</div>
