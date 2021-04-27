import React from "react";
import {render} from "react-dom";
class Car extends React.Component {
    render(){
        return <h2>Sample Componet</h2>;
    }
}

render(<Car/>, document.getElementById("root"));