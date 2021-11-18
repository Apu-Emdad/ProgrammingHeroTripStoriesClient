import React from "react";

import Banner from "../Banner/Banner";
import Faq from "../FAQ/Faq";
import ReviewSection from "../ReviewSection/ReviewSection";

import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home" className="">
      <Banner></Banner>
      <Services></Services>
      <ReviewSection></ReviewSection>
      <Faq></Faq>
    </div>
  );
};

export default Home;
