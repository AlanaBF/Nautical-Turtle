import React from "react";
import "../../assets/styles/pages.css";
import turtleImg from "../../assets/images/Turtle.jpeg";
import MyWebsites from "../../components/MyWebsites";

function Home() {
  return (
    <div className="pageBackground">
      <div>
        <h1 className="homePageTitle">Nautical Turtle</h1>
        <div>
          <h2 className="homePageSubTitle">
            Welcome to my website, a hub for all things that captivate my
            interest! Here, you'll find a diverse array of content that I'm
            passionate about, and not stopping there – new content will be added
            regularly. The aim is to engage and inspire everyone, so take a
            plunge into the captivating world of my interests and hopefully, it
            will spark your curiosity too!
          </h2>
          <img src={turtleImg} className="turtleImg" alt="Turtle Image" />
        </div>
      </div>{" "}
      <div>
        <MyWebsites/>
      </div>
      <div>
        <br />
      </div>
    </div>
  );
}

export default Home;
