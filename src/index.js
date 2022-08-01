import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import "./index.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
