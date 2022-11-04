import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
// import counterR from "./modules/counterR";

// import 할 파일이 index.js 라면 파일명을 생략할 수 있다.
// reducer 함수를 통합한 파일. store의 값을 참조하려면 reducerName.변수명 또는 reducerName.함수명 형태로 참조해야함.
import rootReducer from "./modules";

// state를 관리할 객체를 생성한다.
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 이 밑에 정의되어 있는 컴포넌트들은 전부다 redux를 쓸 수 있다 이말이다. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
