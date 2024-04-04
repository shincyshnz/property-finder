import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ErrorProvider } from "./context/ErrorContext.jsx";
import { register } from 'swiper/element/bundle';

register();
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ErrorProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorProvider>
  // </React.StrictMode>,
);
