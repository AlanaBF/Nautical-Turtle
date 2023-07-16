import React from "react";
import GoogleSearch from "../../components/GoogleSearch";
import "../../assets/styles/pages.css";
import turtleImg from "../../assets/images/Turtle.jpeg"

function Home() {
  return (
    <div className="pageBackground">
      <div>
        <h1 className="homePageTitle">Nautical Turtle</h1>
        <div>
            <img src={turtleImg} className="turtleImg" alt="Turtle Image" />
          </div>
        <h2 className="homePageSubTitle">
          Welcome to our website, a hub for all things that captivate my
          interest! Here, you'll find a diverse array of content that I'm
          passionate about, and not stopping there – new content will be added
          regularly. The aim is to engage and inspire everyone, so take a plunge
          into the captivating world of my interests and hopefully, it will
          spark your curiosity too!
        </h2>
      </div>{" "}
      <div className="googleSearchContainer">
        <GoogleSearch />
      </div>
      <div>
      
     <br/>
</div>
    </div>
  );
}

export default Home;
