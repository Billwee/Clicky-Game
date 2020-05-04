import React from "react";
import "./style.css";

function Item(props) {
  return (
    <div className="gridItem">
      <div>
        <img onClick={() => props.check(props.id)} className="photo" src={props.image} alt="" />
      </div>
    </div>
  )
}

export default Item;