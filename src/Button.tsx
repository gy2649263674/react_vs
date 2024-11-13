//@ts-ignore
// import * as React from "react";
import "./App.css";
import { useState, useEffect } from "react";

function Slider({ style }: { style: React.CSSProperties }) {
  return <div className="Slider" style={style}></div>;
}

function CheckBox() {
  const [sliderStyle, setSliderStyle] = useState({
    width: "30%",
    height: "100%",
    backgroundColor: "black",
    borderRadius: "50%",
    position: "relative",
    left: "0",
  });

  const [status, setStatus] = useState(false);
  function handleClick() {
    console.log("clicked", status);
    setStatus(() => !status);
    setSliderStyle((prevStyle) => ({
      ...prevStyle,
      position: "relative",
      left: status ? "0" : "100%",
    }));
  }
  const checkBoxStyle: React.CSSProperties = {
    color: "pink",
    border: "2px solid red",
    position: "relative",
    left: status ? "100%" : "0",
    borderRadius: "32%",
    display: "inline-block",
    width: "25px",
    height: "10px",
    backgroundColor: "white",
  };
  return (
    <>
        <button style={checkBoxStyle} onClick={handleClick} checked = {status}>
        <Slider style={sliderStyle} />
        </button>
    </>
  );
}

//@ts-ignore

export { CheckBox };
