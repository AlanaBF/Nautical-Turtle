import React from "react";
import { Exhibit } from "@readyplayerme/visage";

const modelSrc = "https://models.readyplayer.me/640c924dab2415db27b49dc6.glb";

function Avatar1() {
  return <Exhibit modelSrc={modelSrc} />;
}

export default Avatar1;
