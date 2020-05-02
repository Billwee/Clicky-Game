import React from "react";
import "./style.css";

function Item(props) {
  return (
    <div className="gridItem">
      <div>
        <img className="photo" src={props.image} alt="" />
      </div>
    </div>
  )
}

export default Item;