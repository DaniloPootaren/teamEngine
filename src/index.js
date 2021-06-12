import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

import App from "./App";

import store from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

if (window.Cypress) {
  window.store = store;
}
