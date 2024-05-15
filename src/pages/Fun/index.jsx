import React from "react";
import GoogleSearch from "../../components/GoogleSearch";
import "../../assets/styles/pages.css";
import logo from "../../assets/branding/Nautical Turtle Logo.png"
import Timer from "../../components/Countdowns/index.jsx";
function Fun() {
  return (
    <div className="pageBackground">
      <div>
      <img src={logo} width="100px"></img>
        <h1 className="homePageTitle">Turtly helpful Page</h1>
      </div>{" "}
      <div><Timer/></div>
      <div className="googleSearchContainer">
        <GoogleSearch />
      </div>
    </div>
  );
}

export default Fun;
