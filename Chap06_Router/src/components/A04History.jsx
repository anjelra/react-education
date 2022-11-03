import React from "react";
import { useNavigate } from "react-router-dom";

function A04History() {
  // navigate라는 훅을 이용.
  const navigate = useNavigate();

  const farward = () => navigate(1);
  // history에 남기지 않음(replace: true.)
  const secondFar = () => navigate('/A02FuncState', { replace: true });
  const goURL = url => navigate(url);

  return (
    <div>
      <h5>Product Component</h5>
      <div>This is Product Component</div>
      <br />

      <div>
        <button onClick={() => navigate(-1)}>BACK</button>
        <button onClick={farward}>FORWARD</button>
        <button onClick={secondFar}>HOME</button>
        <button onClick={() => goURL('/A03Currency')}>PARAMETER</button>
      </div>
    </div>
  );
};
export default A04History;
