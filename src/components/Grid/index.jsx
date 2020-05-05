import React from "react";
import "./style.css";

// Grid container for images to load into
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