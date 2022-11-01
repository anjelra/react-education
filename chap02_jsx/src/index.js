// 보통 기본설정을 함.

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import할 때, {} 로 호출하지 않는 이유는 App 파일이 export할 때 default를 붙여줘서 이다.
// default로 하게 되면 {} 생략 뿐만 아니라, 다른 이름으로 호출할 수 있다.
// ex: export default App
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 에러가 나면 콘솔창에 알려주는것. build하면 사라짐.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
