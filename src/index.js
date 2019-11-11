import React from "react";
import "./assets/fonts/fonts.css";
import ReactDOM from "react-dom";
import App from "./App";
// redux imports
import { Provider } from "react-redux";
import { store, persistor } from "./stores/configureStore";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
