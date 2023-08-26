import React from 'react';
import "../../assets/styles/components.css"
import Kernow from "../../assets/images/kernow-android-chrome-512x512.png"
import Cricket from "../../assets/images/cricket-android-chrome-512x512.png"
import Portfolio from "../../assets/images/portfolio-android-chrome-512x512.png"
import RWCFrance23 from "../../assets/images/RugbyLogo.png"

function MyWebsites() {
  return (
    <div>
      <h1>My Live Website Builds So Far</h1>
      <a href="" target="_blank" rel="noopener noreferrer">
        <button className="website-button-RWCFrance23"><img className="website-image" src={RWCFrance23}></img>Rugby World Cup France 2023</button>
      </a>
      <a  href="https://www.cricketfeverhub.com" target="_blank" rel="noopener noreferrer">
        <button className="website-button-cricket"><img className="website-image" src={Cricket}></img>Cricket Fever Hub</button>
      </a>
      <a  href="https://www.alanabarrettfrew.com" target="_blank" rel="noopener noreferrer">
        <button className="website-button-portfolio"><img className="website-image" src={Portfolio}></img>Portfolio Website</button>
      </a>
      <a href="https://www.kernowpets.com" target="_blank" rel="noopener noreferrer">
        <button className="website-button-kernow"><img className="website-image" src={Kernow}></img>Kernow Pets Reptile Specialist</button>
      </a>
    </div>
  );
}

export default MyWebsites;