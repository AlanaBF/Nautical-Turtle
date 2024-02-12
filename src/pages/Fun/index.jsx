import React from "react";
import GoogleSearch from "../../components/GoogleSearch";
import "../../assets/styles/pages.css";
import Voiceinator from "../../components/Voiceinator";
import SpeechDetector from "../../components/SpeechDetector.jsx";
// import DoodlePad from "../../components/DoodlePad/index.jsx";
// import WhackAMole from "../../components/WhackaMole/index.jsx";
import Timer from "../../components/Countdowns/index.jsx";
function Fun() {
  return (
    <div className="pageBackground">
      <div>
        <h1 className="homePageTitle">Fun Stuff</h1>
      </div>{" "}
      <div><Timer/></div>
      <div className="googleSearchContainer">
        <GoogleSearch />
      </div>
      <div className="speech-and-voice-div">
        <Voiceinator />
        <SpeechDetector />
      </div>
      {/* <div className="doodle-container"><DoodlePad/></div> */}
      {/* <div className="game-container"><WhackAMole/></div> */}
    </div>
  );
}

export default Fun;
