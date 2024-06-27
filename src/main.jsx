import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import loader from './ban2.gif'

import './i18n.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>
      <img src={loader}></img>
    </div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
