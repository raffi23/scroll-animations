import { motion, useTransform } from "framer-motion";
import Card from "./Reusable/Card";
import clsx from "clsx";
import { useScrollContext } from "./helpers/ScrollContext";
import NavCard from "./Reusable/NavCard";

const Cards = () => {
  const scrollYProgress = useScrollContext();
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["-20%", "0%", "0%"]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6],
    [
      "calc(100vh - 120%)",
      "calc(0vh - 70%)",
      "calc(0vh - 70%)",
      "calc(0vh - 0%)",
    ]
  );

  return (
    <motion.div
      className="grid perspective max-w-screen-2xl mx-auto"
      style={{ x, y }}
    >
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Card key={i} index={i}>
            <img
              className={clsx(
                i === 3 ? "h-3/4" : "h-full",
                i === 3 ? "w-3/4" : "w-full",
                i <= 3 ? "opacity-80" : "opacity-100",
                "object-contain"
              )}
              src={`/amie-992/screens/screen-${i}.png`}
            />
          </Card>
        ))}
      <Card index={5}>
        <NavCard />
      </Card>
    </motion.div>
  );
};

export default Cards;
