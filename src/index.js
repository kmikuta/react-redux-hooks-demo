import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";

import { createStore } from "./store";
import { createQueryClient } from "./query";
import { App } from "./app/App";
import "./index.css";

const store = createStore();
const queryClient = createQueryClient();
const containerEl = document.getElementById("root");
const root = ReactDOM.createRoot(containerEl);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
