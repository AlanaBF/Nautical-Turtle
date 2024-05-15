import React from "react";
import "../../assets/styles/pages.css";
import turtleImg from "../../assets/images/Turtle.jpeg";
// import MyWebsites from "../../components/MyWebsites";
import banner from "../../assets/branding/2.png";
import profilePic from "../../assets/images/ProfilePic.jpeg";

function Home() {
  return (
    <div className="pageBackground">
      <div>
        <div className="jumbotron">
          <img
            src={banner}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              objectPosition: "top",
            }}
            alt="Banner"
          />
        </div>
        <h2 style={{ padding: "20px" }}>Teacher to Coder: My Tech Journey <br/>
  <span style={{ color: "var(--dark-blue)" }}>@teacherturnsturtle81</span>
  <img src={profilePic} style={{width:"200px", borderRadius:"100%", border: "solid 5px var(--dark-blue)"}}></img>
</h2>
<div style={{ margin: "auto", textAlign: "center" }}>
<h2>
  <div>
    <span style={{ color: "red", display: "inline-block", marginRight: "5px" }}>T</span><span style={{ display: "inline-block", marginLeft: "5px" }}>ransforming,</span>
  </div>
  <div>
    <span style={{ color: "red", display: "inline-block", marginRight: "5px" }}>U</span><span style={{ display: "inline-block", marginLeft: "5px" }}>nderstanding, and</span>
  </div>
  <div>
    <span style={{ color: "red", display: "inline-block", marginRight: "5px" }}>R</span><span style={{ display: "inline-block", marginLeft: "5px" }}>eimagining</span>
  </div>
  <div>
    <span style={{ color: "red", display: "inline-block", marginRight: "5px" }}>T</span><span style={{ display: "inline-block", marginLeft: "5px" }}>ech.</span>
  </div>
  <div>
    <span style={{ color: "red", display: "inline-block", marginRight: "5px" }}>L</span><span style={{ display: "inline-block", marginLeft: "5px" }}>earning</span>
  </div>
  <div>
    <span style={{ color: "red", display: "inline-block", marginRight: "5px" }}>E</span><span style={{ display: "inline-block", marginLeft: "5px" }}>very Day</span>
  </div>
  </h2>
</div>










           <div>
          <h2 className="homePageSubTitle">
          Welcome to my digital space, where I share what I love! Here, you'll find bits and pieces of my journey as I embark on a new path from teaching to tech.

For 20 years, I devoted myself to education. Now, I'm diving headfirst into the world of technology, and I couldn't be happier.<br/><br/>

I've recently launched an Instagram account, '@teacherturnsturtle81.' The turtle in the name symbolizes my journey of Transforming, Understanding, and Reimagining Tech, with a commitment to Learning Every Day.

<br/><br/>Sailing has always been a passion of mine. From turning turtle and experiencing the world from below to falling in love with turtles during a trip to the Maldives, they've inspired my brand and my journey.

Join me as I navigate this new terrain, from the challenges of 'turning turtle' – embracing the unfamiliar and exploring new perspectives – to the joys of diving deep into the ever-evolving tech landscape.
          </h2>
          <img
            src={turtleImg}
            width="80%"
            style={{
              width: "60%",
              maxHeight: "400px",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "50px",
            }}
            alt="Turtle Image"
          />
        </div>
      </div>{" "}
      {/* <div>
        <MyWebsites />
      </div> */}
      <div>
        <br />
      </div>
    </div>
  );
}

export default Home;
