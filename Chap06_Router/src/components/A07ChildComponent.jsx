import React from "react";
import { Link, Outlet } from "react-router-dom";

function A07ChildComponent() {
  return (
    <div>
      <h5>Children Component</h5>
      <div>This is Children Component</div>
      <br />

      <div>
        <Link to="/A07ChildComponent">1</Link> | {' '}
        <Link to="/A07ChildComponent/two"> 2</Link> |{' '}

        {/* 상대패스면 부모의 path위에 상대 패스명이 붙어 정의된다. */}
        <Link to="/A07ChildComponent/three"> 3</Link>
      </div>

      <hr />

      {/* 자식 Route 요소가 로드되어 표시될 위치 */}
      <Outlet></Outlet>
    </div>
  );
};
export default A07ChildComponent;
