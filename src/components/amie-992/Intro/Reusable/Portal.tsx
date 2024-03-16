import { FC } from "react";
import { useScrollContext } from "../helpers/ScrollContext";
import { motion, useTransform } from "framer-motion";
import clsx from "clsx";

type Props = {
  absolute?: boolean;
};
const Portal: FC<Props> = ({ absolute = false }) => {
  const scrollYProgress = useScrollContext();
  const opacity = useTransform(
    scrollYProgress,
    [0.8, 1],
    [1, 0]
  );

  return (
    <motion.div
      style={{
        opacity,
      }}
      className={clsx(
        absolute && "absolute top-4 bottom-4 left-[69px]",
        "w-10 aspect-[4/3] rounded-lg bg-gradient-to-tr from-orange-500 to-green-500"
      )}
    />
  );
};

export default Portal;
