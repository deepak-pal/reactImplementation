import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me! "),
    React.createElement("h1", {}, "Adopt Me! "),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havnes" }),
    React.createElement(Pet, {
      name: "Pepper ",
      animal: "Bird",
      breed: "Tannes"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
