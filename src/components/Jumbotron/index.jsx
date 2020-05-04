import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron mt-4">
      <h1 className="display-4 text-center mb-4 font-weight-bold">Clicky Game</h1>
      <p className="lead text-center">Don't click the same image twice!</p>
      {/* <hr class="my-4"></hr> */}
      {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
      {props.children}
    </div>
  )
}

export default Jumbotron;