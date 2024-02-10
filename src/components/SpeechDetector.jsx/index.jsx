import React, { useEffect, useState, useRef } from 'react';
import '../../assets/styles/components.css';

const SpeechDetectionComponent = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState(null);
  const recognitionRef = useRef(null);
  const wordsRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError("Your browser doesn't support speech recognition.");
      return;
    }
    
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.interimResults = true;
    recognitionInstance.continuous = true; // Keep recognition active continuously
    recognitionInstance.lang = 'en-UK';
    recognitionRef.current = recognitionInstance;

    recognitionInstance.addEventListener('result', handleResult);
    recognitionInstance.addEventListener('end', handleEnd);
    recognitionInstance.addEventListener('error', handleError);

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.removeEventListener('result', handleResult);
        recognitionRef.current.removeEventListener('end', handleEnd);
        recognitionRef.current.removeEventListener('error', handleError);
        recognitionRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    if (wordsRef.current) {
      wordsRef.current.textContent = transcript;
    }
  }, [transcript]);

  const handleResult = e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    setTranscript(transcript);
  };

  const handleEnd = () => {
    if (isListening) {
      recognitionRef.current.start();
    }
  };

  const handleError = event => {
    setError(`Speech recognition error occurred: ${event.error}`);
    console.error('Speech recognition error:', event.error);
    setIsListening(false);
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
    setError(null); // Clear any previous errors when toggling listening
  };
  

  const handleCopy = () => {
    if (wordsRef.current) {
      const textToCopy = wordsRef.current.textContent;
      navigator.clipboard.writeText(textToCopy)
        .then(() => alert('Text copied to clipboard'))
        .catch(error => console.error('Error copying text: ', error));
    }
  };

  const handleClear = () => {
    setTranscript('');
    if (wordsRef.current) {
      wordsRef.current.textContent = '';
    }
  };

  return (
    <div className='speech-detector-container'>
      {error && <div className="error">{error}</div>}
      <h1 className="speech-detector-title">Speech Detector</h1>
      <div
        className="words"
        contentEditable={true}
        suppressContentEditableWarning={true}
        ref={wordsRef}
      />
      <div className="controls">
        <button className="speech-listen-button" onClick={toggleListening}>{isListening ? 'Stop' : 'Start'} Listening</button>
        <button className="copy-text-button" onClick={handleCopy} disabled={!transcript}>Copy Text</button>
        <button className="text-clear-button" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default SpeechDetectionComponent;
