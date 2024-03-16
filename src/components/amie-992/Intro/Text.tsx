import { motion, useTransform } from "framer-motion";
import { useScrollContext } from "./helpers/ScrollContext";

const Text = () => {
  const scrollYProgress = useScrollContext();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0, 1]
  );

  return (
    <motion.div
      className="text-accent text-xl md:text-3xl lg:text-4xl text-center mb-12"
      style={{ opacity }}
    >
      <h1 className="mb-8">📆</h1>
      <h1>Todos, email, calendar.</h1>
      <h2>One and done.</h2>
    </motion.div>
  );
};

export default Text;
