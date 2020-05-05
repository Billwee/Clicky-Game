import React from "react";
import "./style.css";

// Image grid items. 
function Item(props) {
  return (
    <div className="gridItem">
      <div>
        <img onClick={() => props.check(props.id)} key={props.id} className={`photo ${props.wrong}`} src={props.image} alt="" />
      </div>
    </div>
  )
}

export default Item;