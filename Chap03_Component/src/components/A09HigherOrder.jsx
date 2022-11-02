import React from "react";
import A07WithComp from "./A07WithComp";

function A07HigherOrder(props) {
  return (
    <div>
      <h3>A07 Higher Order Component</h3>
      props: {props.name}
      <br />

      Age: {props.age}
      <br />
      
      <button onClick={props.changeAge}>AGE</button>
    </div>
  );
}

export default A07WithComp(A07HigherOrder);
