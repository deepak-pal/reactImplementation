import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="some thing-important">Adopt Me !</h1>
      <Pet name="Luna" animal="Dog" breed="Havanees" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
