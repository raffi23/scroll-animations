import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MotionConfig, Transition } from "framer-motion";

const defaultTransition: Transition = {
  duration: 0.5,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionConfig transition={defaultTransition}>
      <App />
    </MotionConfig>
  </React.StrictMode>
);
