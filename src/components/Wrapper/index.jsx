import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="container">
      <div class="jumbotron mt-4">
        <h1 class="display-4 text-center mb-4 font-weight-bold">Clicky Game</h1>
        <p class="lead text-center">Don't click the same image twice!</p>
        {/* <hr class="my-4"></hr> */}
        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
      </div>
      {props.children}
    </div>)
  {/* <div className="wrapper">{props.children}</div>; */ }
}

export default Wrapper;
