import React from "react";
import "./style.css";

function Grid(props) {
  return (
    <div className="container">
      <div id='gridBox'>

        {props.children}
      </div>
    </div>

  )
}

export default Grid;