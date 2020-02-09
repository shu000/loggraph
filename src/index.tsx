import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./App";

// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

//  <Provider store={store}></Provider>
