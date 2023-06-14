import React from "react";
import logo from "../../assets/images/businessLogo.jpeg";
import ContainerIntro from "../../components/Container";
import About from "../../components/About/index";
import "../../assets/styles/pages.css";

function Home() {
  return (
    <div className="pageBackground">
      <div>
        <h1 className="homePageTitle">Nautical Turtle</h1>
        </div> 
        <About />
        <br/>
        <ContainerIntro />
      </div>
  );
}

export default Home;
