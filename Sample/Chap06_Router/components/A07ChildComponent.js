import React from "react";
import { Link } from "react-router-dom";

function A07ChildComponent() {
  return (
    <div>
      <h5>Children Component</h5>
      <div>This is Children Component</div>
      <br />

      <div>
        <Link to="">ONE</Link> | {' '}
        <Link to=""> TWO</Link> |{' '}
        <Link to=""> THREE</Link>
      </div>

      <hr />
    </div>
  );
};
export default A07ChildComponent;
