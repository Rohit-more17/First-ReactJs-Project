
//Used States + Props  + event 

import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Hello State is defined here");

  const handleUpButton = () => {
    console.log("upClick Clicked");
    let upper = text.toUpperCase()
    setText(upper);
  };

  const handleLowButton = () => {
    console.log("LOWClick Clicked");
    let lower = text.toLowerCase();
    setText(lower);
  };

  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };
  return (
    <>
      <div>
          
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h3>{props.heading}</h3>
          </label>
          <textarea
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
          ></textarea>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={handleUpButton}
      >
        Convert To UpperCase
      </button>

      <button
        type="button"
        className="btn btn-danger mx-2"
        onClick={handleLowButton}
      >
        Convert To LowerCase
      </button>

      <div className="container my-3">
        <h3>Your Text Summery</h3>
        <p>
          Words - {text.split(" ").length} || Characters - {text.length}
        </p>
      </div>
    </>
  );
}
