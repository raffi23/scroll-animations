import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MotionConfig, Transition } from "framer-motion";
import "./index.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

const defaultTransition: Transition = {
  duration: 0.5,
};

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <MotionConfig transition={defaultTransition}>
      <App />
    </MotionConfig>
  </React.StrictMode>
);
