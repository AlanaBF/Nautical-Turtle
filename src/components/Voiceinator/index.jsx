import React, { useState, useEffect } from "react";
import "../../assets/styles/components.css";

function Voiceinator() {
  const [msg, setMsg] = useState(new SpeechSynthesisUtterance());
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [text, setText] = useState("Hello! I love JavaScript 👍");
  const [voicesLoaded, setVoicesLoaded] = useState(false);

  useEffect(() => {
    setMsg({ ...msg, text: text });
  }, [text]);

  useEffect(() => {
    function populateVoices() {
      setVoices(speechSynthesis.getVoices());
      setVoicesLoaded(true);
    }

    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
      populateVoices();

      // Fallback mechanism for browsers where voiceschanged event may not work
      const intervalId = setInterval(() => {
        if (!voicesLoaded) {
          populateVoices();
        }
      }, 1000); // Check every 1 second for voices

      return () => clearInterval(intervalId);
    } else {
      console.error('Speech synthesis not supported on this device.');
    }
  }, [voicesLoaded]);

  function setVoice(e) {
    const selectedOption = e.target.value;
    setSelectedVoice(selectedOption);
    setMsg({
      ...msg,
      voice: voices.find((voice) => voice.name === selectedOption),
    });
  }

  function toggle(startover = true) {
    speechSynthesis.cancel();
    if (startover) {
      const utterance = new SpeechSynthesisUtterance(text);
      const selectedVoiceObj = voices.find(
        (voice) => voice.name === selectedVoice
      );
      if (selectedVoiceObj) {
        utterance.voice = selectedVoiceObj;
        utterance.rate = rate;
        utterance.pitch = pitch;
        speechSynthesis.speak(utterance);
      } else {
        console.error("Selected voice is not available.");
      }
    }
  }

function setOption(e) {
  const { name, value } = e.target;
  setMsg(prevMsg => ({
    ...prevMsg,
    [name]: value
  }));
  if (name === 'rate') {
    setRate(value);
  } else if (name === 'pitch') {
    setPitch(value);
  }
  toggle();
}


  return (
    <div className="voiceinator">
      <h1 className="voiceinator-title">The Voiceinator</h1>

      <select
        name="voice"
        id="voices"
        className="voiceinator"
        onChange={setVoice}
        value={selectedVoice}
        disabled={!voicesLoaded} // Disable the dropdown until voices are loaded
      >
        <option value="">Select A Voice</option>
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>

      <label htmlFor="rate">Rate:</label>
      <input
        name="rate"
        type="range"
        min="0"
        max="3"
        value={rate}
        step="0.1"
        onChange={setOption}
      />

      <label htmlFor="pitch">Pitch:</label>
      <input
        name="pitch"
        type="range"
        min="0"
        max="2"
        step="0.1"
        value={pitch}
        onChange={setOption}
      />

      <textarea
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button id="stop" onClick={() => toggle(false)}>
        Stop!
      </button>
      <button id="speak" onClick={toggle}>
        Speak
      </button>
    </div>
  );
}

export default Voiceinator;


// import React, { useState, useEffect } from "react";
// import "../../assets/styles/components.css";
// function Voiceinator() {
//   const [msg, setMsg] = useState(new SpeechSynthesisUtterance());
//   const [voices, setVoices] = useState([]);
//   const [selectedVoice, setSelectedVoice] = useState("");
//   const [rate, setRate] = useState(1);
//   const [pitch, setPitch] = useState(1);
//   const [text, setText] = useState("Hello! I love JavaScript 👍");

//   useEffect(() => {
//     setMsg({ ...msg, text: text });
//   }, [text]);

//   useEffect(() => {
//     function populateVoices() {
//       setVoices(speechSynthesis.getVoices());
//     }

//     speechSynthesis.addEventListener("voiceschanged", populateVoices);

//     return () => {
//       speechSynthesis.removeEventListener("voiceschanged", populateVoices);
//     };
//   }, []);

//   function setVoice(e) {
//     const selectedOption = e.target.value;
//     setSelectedVoice(selectedOption);
//     setMsg({
//       ...msg,
//       voice: voices.find((voice) => voice.name === selectedOption),
//     });
//   }

//   function toggle(startover = true) {
//     speechSynthesis.cancel();
//     if (startover) {
//       const utterance = new SpeechSynthesisUtterance(text);
//       const selectedVoiceObj = voices.find(
//         (voice) => voice.name === selectedVoice
//       );
//       if (selectedVoiceObj) {
//         utterance.voice = selectedVoiceObj;
//         utterance.rate = rate;
//         utterance.pitch = pitch;
//         speechSynthesis.speak(utterance);
//       } else {
//         // Handle case when selected voice is not available
//         console.error("Selected voice is not available.");
//       }
//     }
//   }

//   function setOption(e) {
//     const { name, value } = e.target;
//     setMsg({ ...msg, [name]: value });
//     toggle();
//   }

//   return (
//     <div className="voiceinator">
//       <h1 className="voiceinator-title">The Voiceinator</h1>

//       <select
//         name="voice"
//         id="voices"
//         className="voiceinator"
//         onChange={setVoice}
//         value={selectedVoice}
//       >
//         <option value="">Select A Voice</option>
//         {voices.map((voice) => (
//           <option key={voice.name} value={voice.name}>
//             {voice.name} ({voice.lang})
//           </option>
//         ))}
//       </select>

//       <label htmlFor="rate">Rate:</label>
//       <input
//         name="rate"
//         type="range"
//         min="0"
//         max="3"
//         value={rate}
//         step="0.1"
//         onChange={setOption}
//       />

//       <label htmlFor="pitch">Pitch:</label>
//       <input
//         name="pitch"
//         type="range"
//         min="0"
//         max="2"
//         step="0.1"
//         value={pitch}
//         onChange={setOption}
//       />

//       <textarea
//         name="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       ></textarea>

//       <button id="stop" onClick={() => toggle(false)}>
//         Stop!
//       </button>
//       <button id="speak" onClick={toggle}>
//         Speak
//       </button>
//     </div>
//   );
// }

// export default Voiceinator;
