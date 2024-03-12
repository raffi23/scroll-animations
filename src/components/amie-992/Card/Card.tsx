import { MotionValue, useTransform } from "framer-motion";
import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  index: number;
  scrollYProgress: MotionValue;
};

const Card: FC<PropsWithChildren<Props>> = ({
  index,
  children,
  scrollYProgress,
}) => {
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6],
    ["40deg", "30deg", "20deg", "0deg"]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6],
    ["60deg", "50deg", "50deg", "0deg"]
  );
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6],
    ["-40deg", "-30deg", "-20deg", "0deg"]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6],
    [
      `calc(${index} * 32%)`,
      `calc(${index} * 10%)`,
      `calc(${index} * 5%)`,
      `calc(${index} * 0%)`,
    ]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6],
    [(4 - index) * 80, (4 - index) * 20, (4 - index) * 20, 0]
  );
  const z = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6],
    [-1500, -1000, -1000, 0]
  );
  const opacity = useTransform(
    scrollYProgress,
    index == 4 ? [0.5, 1] : [0, 0.25],
    index == 4 ? [0, 1] : [0.5, 1]
  );

  return (
    <motion.div
      className={clsx(
        "flex justify-center items-center grid-stack overflow-hidden",
        "rounded-lg aspect-[16/10]",
        index !== 5 && "bg-gray-600/15 backdrop-blur-xl"
      )}
      style={{
        x,
        y,
        z,
        rotateX,
        rotateY,
        rotateZ,
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
