import React from "react";
import About from "../../components/About/index"
import "../../assets/styles/pages.css";

function AboutMe() {
  return (
    <div className="pageBackground">
      <div>
        <h1 className="homePageTitle">About Me</h1>
      </div>
    <About/>
    </div>
  );
}

export default AboutMe;