import React, { useRef, useState, useEffect } from "react";
import Asterix from "../../assets/colouring/Asterix_14.jpg";
import Obelix from "../../assets/colouring/Obelix.jpeg"; // Example of another image

function DoodlePad() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [hue, setHue] = useState(0);
  const [color, setColor] = useState("rainbow"); // default to rainbow effect
  const [lineWidth, setLineWidth] = useState(5); // default line width
  const [imageLoaded, setImageLoaded] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const [canvasContent, setCanvasContent] = useState("blank");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (canvasContent === "blank") {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      setImageLoaded(true);
    } else {
      const img = new Image();
      if (canvasContent === "Asterix") {
        img.src = Asterix;
      } else if (canvasContent === "Obelix") {
        img.src = Obelix;
      } // Add more else if conditions for other images
      img.onload = () => {
        setCanvasWidth(img.width);
        setCanvasHeight(img.height);
        ctx.drawImage(img, 0, 0, img.width, img.height);
        setImageLoaded(true);
      };
    }
  }, [canvasContent, canvasWidth, canvasHeight]);

  function draw(e) {
    if (!isDrawing || !imageLoaded) return;

    const ctx = canvasRef.current.getContext("2d");
    const rect = canvasRef.current.getBoundingClientRect();

    if (color === "rainbow") {
      ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
      setHue((hue + 1) % 360);
    } else {
      ctx.strokeStyle = color;
    }

    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();

    setLastX(e.clientX - rect.left);
    setLastY(e.clientY - rect.top);
  }

  function handleMouseDown(e) {
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setLastX(e.clientX - rect.left);
    setLastY(e.clientY - rect.top);
  }

  function handleMouseUp() {
    setIsDrawing(false);
  }

  function clearCanvas() {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    setCanvasContent("blank");
  }

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  function handleLineWidthChange(e) {
    setLineWidth(parseInt(e.target.value));
  }

  function handleCanvasChange(e) {
    setCanvasContent(e.target.value);
  }


  return (
    <div>
      <h1 className="doodle-title">Doodle Pad</h1>
      <p>
        Click and hold mouse down or touch and hold to draw. Release to stop.
        Click button to clear the canvas and start again. Change the line color,
        line thickness, and images using the drop-downs.
      </p>
      <button type="button" className="btn clear-button" onClick={clearCanvas}>
        Clear Canvas
      </button>
      <label className="color-picker">
        Choose Color:{" "}
        <select
          className="color-picker-dropdown"
          value={color}
          onChange={handleColorChange}
        >
          <option value="rainbow">Rainbow</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <label className="line-width-picker">
        Line Width:{" "}
        <select
          className="line-width-picker-dropdown"
          value={lineWidth}
          onChange={handleLineWidthChange}
        >
          <option value="1">1px</option>
          <option value="3">3px</option>
          <option value="5">5px</option>
          <option value="8">8px</option>
          <option value="10">10px</option>
          <option value="50">15px</option>
          <option value="20">20px</option>
        </select>
      </label>
      <label className="canvas-content-picker">
        Choose Canvas Content:{" "}
        <select
          className="canvas-content-picker-dropdown"
          value={canvasContent}
          onChange={handleCanvasChange}
        >
          <option value="blank">Blank</option>
          <option value="Asterix">Asterix</option>
          <option value="Obelix">Obelix</option>
          {/* Add more options for other images */}
        </select>
      </label>
      <canvas
        id="draw"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={draw}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp}
      ></canvas>
    </div>
  );
}

export default DoodlePad;
