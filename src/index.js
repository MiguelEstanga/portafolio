import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LanguageProvider } from "./context/LanguageContext";
import { YoProvider } from "./context/YoContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <YoProvider>
      <App />
    </YoProvider>
  </LanguageProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
