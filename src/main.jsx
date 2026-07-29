import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <div className="overflow-hidden">
        <App />
        </div>
          <Toaster
    position="top-right"
    reverseOrder={false}
  />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);