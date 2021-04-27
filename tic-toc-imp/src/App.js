
import React from "react";
import {render} from "react-dom";

const Welcome = (props) => {
return (
   <h1>Hello {props.name}</h1>
)
};
const App = () =>{
return(
   <div>
      <Welcome name="Meenu"></Welcome>
      <Welcome name ="Mary"></Welcome>
      <Welcome name="Andrina"></Welcome>
   </div>
);
};
render(<App></App>, document.getElementById("root"));
