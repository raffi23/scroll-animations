import { MotionValue, motionValue } from "framer-motion";
import { createContext, useContext } from "react";

const initial = motionValue(0);

export const ScrollContext =
  createContext<MotionValue<number>>(initial);

export const useScrollContext = () =>
  useContext(ScrollContext);
