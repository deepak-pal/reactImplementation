
import React from "react";
import {render} from "react-dom";

const App = (props) => {
return (
   <h1>Hello {props.name}</h1>
)
};
const element = <App name="Sara" />;
render(element, document.getElementById("root"));
