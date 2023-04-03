import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { createStore } from "./store";
import { App } from "./app/App";
import "./index.css";

const store = createStore();
const containerEl = document.getElementById("root");
const root = ReactDOM.createRoot(containerEl);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
