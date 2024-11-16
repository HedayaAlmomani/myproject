import React from "react";
import Slider from "../../components/HomeComponents/Slider";
import Services from "../../components/HomeComponents/Services";
import CallToAction from "../../components/HomeComponents/CallToAction";
import Footer from "../../components/HomeComponents/Footer";
import "./style.scss";
import ProjectIdeas from "../../components/HomeComponents/ProjectIdeas";

const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <Services />
      <ProjectIdeas/>
      <CallToAction />
      <Footer/>
    </div>
  );
};

export default Home;
