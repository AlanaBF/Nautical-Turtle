import React from "react";
import About from "../../components/About/index";
import "../../assets/styles/pages.css";

function Home() {
  return (
    <div className="pageBackground">
      <div>
        <h1 className="homePageTitle">Alana Barrett-Frew</h1>
      </div>
      <About />
    </div>
  );
}

export default Home;
