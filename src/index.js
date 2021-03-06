import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.sass";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
