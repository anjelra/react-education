import React from "react";
import A09WithComp from "./A09WithComp";    // 함수다.

function A09HigherOrder(props) {
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

// 이 말은, withComp에 매개변수로 A09HigherOrder 를 넘겨줬다.
export default A09WithComp(A09HigherOrder);
