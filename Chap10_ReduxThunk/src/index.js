import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

// npm i redux react-redux redux-actions redux-devtools-extension
// npm i react-router-dom axios immer
// npm i redux-logger redux-thunk
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
// import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./modules/";

import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
