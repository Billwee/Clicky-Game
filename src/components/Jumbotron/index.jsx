import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron mt-4">
      <img id="logo" src="/img/logo.png" alt="" />
      <h3 id="clickText">Clicky Game</h3>
      <h5 className="">Don't click the same image twice!</h5>
      {props.children}
    </div>
  )
}

export default Jumbotron;