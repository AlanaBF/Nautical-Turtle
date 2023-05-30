import React from "react";
import logo from '../../assets/images/businessLogo.jpeg'
import ContainerIntro from "../../components/Container";
import "../../assets/styles/pages.css";


function Home() {
  return (
    <div className="pageBackground">
      <div>
      <div className="underConstruction">SITE UNDER CONSTRUCTION</div>
        <div >
          <h1 className="homePageTitle">Nautical Turtle</h1>
          <img src={logo} className="businessLogo" alt="businesslogo" />
        </div>
        <ContainerIntro></ContainerIntro>
      </div>
    </div>
  );
}

export default Home;
