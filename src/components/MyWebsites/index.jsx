import React from 'react';
import "../../assets/styles/components.css"
import Kernow from "../../assets/images/kernow-android-chrome-512x512.png"
import Cricket from "../../assets/images/cricket-android-chrome-512x512.png"
import Portfolio from "../../assets/images/portfolio-android-chrome-512x512.png"

function MyWebsites() {
  return (
    <div>
      <h1>See my other websites</h1>
      
      <a  href="https://www.cricketfeverhub.com" target="_blank" rel="noopener noreferrer">
        <button className="website-button-cricket"><img className="website-image" src={Cricket}></img>Cricket Fever Hub</button>
      </a>
      <a  href="https://www.alanabarrettfrew.com" target="_blank" rel="noopener noreferrer">
        <button className="website-button-portfolio"><img className="website-image" src={Portfolio}></img>Portfolio Website</button>
      </a>
      <a href="https://www.kernowpets.com" target="_blank" rel="noopener noreferrer">
        <button className="website-button-kernow"><img className="website-image" src={Kernow}></img>Kernow Pets Reptile Specialist</button>
      </a>
      {/* <a href="https://www.kernowpets.com" target="_blank" rel="noopener noreferrer">
        <button className="website-button-kernow"><img className="website-image" src={Kernow}></img>Kernow Pets Reptile Specialist</button>
      </a>
      <a href="https://www.kernowpets.com" target="_blank" rel="noopener noreferrer">
        <button className="website-button-kernow"><img className="website-image" src={Kernow}></img>Kernow Pets Reptile Specialist</button>
      </a>
      <a href="https://www.kernowpets.com" target="_blank" rel="noopener noreferrer">
        <button className="website-button-kernow"><img className="website-image" src={Kernow}></img>Kernow Pets Reptile Specialist</button>
      </a> */}
    </div>
  );
}

export default MyWebsites;