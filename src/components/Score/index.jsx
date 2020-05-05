import React from "react";
import "./style.css";

function Score(props) {
  return (
    <div id="score" className="container d-flex justify-content-between">
      <div>
        <h2 id="current">Current Score: {props.current} </h2>
      </div>
      <div>
        <h4 id="message">{props.message}</h4>
      </div>
      <div>
        <h2 id="high">High Score: {props.high} </h2>
      </div>

    </div>
  )
}

export default Score