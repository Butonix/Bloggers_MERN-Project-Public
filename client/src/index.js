import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { DarkModeProvider, ModalContextProvider } from "./context";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <DarkModeProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </DarkModeProvider>
  </Provider>
);
