import React from "react";
import {render} from "react-dom";

function Tick(){
    const element = <div>
        <h1>Hello world</h1>
        <h2>
            It is {new Date().toLocaleTimeString()}.
        </h2>
    </div>

    render(element, document.getElementById("root"));

};

setInterval(Tick, 1000);