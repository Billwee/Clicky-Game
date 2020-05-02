import React from "react";

function Row(props) {
  return (
    <div className="row justify-content-lg-center">
      {props.children}
    </div>
  )
}

export default Row;